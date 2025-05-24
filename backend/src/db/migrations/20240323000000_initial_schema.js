export async function up(knex) {
  // Tenants table
  await knex.schema.createTable('tenants', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('domain').unique();
    table.json('branding').defaultTo('{}');
    table.timestamps(true, true);
  });

  // Users table
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.integer('tenant_id').unsigned().references('id').inTable('tenants').onDelete('CASCADE');
    table.string('email').notNullable();
    table.string('password_hash').notNullable();
    table.string('role').defaultTo('user');
    table.json('profile').defaultTo('{}');
    table.timestamps(true, true);
    table.unique(['tenant_id', 'email']);
  });

  // Artists table
  await knex.schema.createTable('artists', (table) => {
    table.increments('id').primary();
    table.integer('tenant_id').unsigned().references('id').inTable('tenants').onDelete('CASCADE');
    table.string('name').notNullable();
    table.text('bio');
    table.string('image_path');
    table.timestamps(true, true);
  });

  // Albums table
  await knex.schema.createTable('albums', (table) => {
    table.increments('id').primary();
    table.integer('tenant_id').unsigned().references('id').inTable('tenants').onDelete('CASCADE');
    table.integer('artist_id').unsigned().references('id').inTable('artists').onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('cover_path');
    table.integer('release_year');
    table.timestamps(true, true);
  });

  // Tracks table
  await knex.schema.createTable('tracks', (table) => {
    table.increments('id').primary();
    table.integer('tenant_id').unsigned().references('id').inTable('tenants').onDelete('CASCADE');
    table.integer('album_id').unsigned().references('id').inTable('albums').onDelete('CASCADE');
    table.integer('artist_id').unsigned().references('id').inTable('artists').onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('file_path').notNullable();
    table.integer('duration').notNullable();
    table.integer('track_number');
    table.json('metadata').defaultTo('{}');
    table.timestamps(true, true);
  });

  // Playlists table
  await knex.schema.createTable('playlists', (table) => {
    table.increments('id').primary();
    table.integer('tenant_id').unsigned().references('id').inTable('tenants').onDelete('CASCADE');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.string('name').notNullable();
    table.text('description');
    table.string('cover_path');
    table.boolean('is_public').defaultTo(false);
    table.timestamps(true, true);
  });

  // Playlist tracks table (for track ordering)
  await knex.schema.createTable('playlist_tracks', (table) => {
    table.increments('id').primary();
    table.integer('playlist_id').unsigned().references('id').inTable('playlists').onDelete('CASCADE');
    table.integer('track_id').unsigned().references('id').inTable('tracks').onDelete('CASCADE');
    table.integer('position').notNullable();
    table.timestamps(true, true);
    table.unique(['playlist_id', 'track_id']);
  });

  // Analytics events table
  await knex.schema.createTable('analytics_events', (table) => {
    table.increments('id').primary();
    table.integer('tenant_id').unsigned().references('id').inTable('tenants').onDelete('CASCADE');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.string('event_type').notNullable();
    table.json('event_data').defaultTo('{}');
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('analytics_events');
  await knex.schema.dropTableIfExists('playlist_tracks');
  await knex.schema.dropTableIfExists('playlists');
  await knex.schema.dropTableIfExists('tracks');
  await knex.schema.dropTableIfExists('albums');
  await knex.schema.dropTableIfExists('artists');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('tenants');
} 