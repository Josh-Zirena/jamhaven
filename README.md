# JamHaven

A modern music collaboration platform built with a monorepo architecture.

## Project Structure

```
jamhaven/
├── backend/         # Backend services and API
├── frontend/        # Web application
├── desktop/         # Desktop application (future)
└── mobile/         # Mobile application (future)
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)
- Docker (for local development)

### Development Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development servers:
   ```bash
   # Start backend
   pnpm --filter backend dev

   # Start frontend
   pnpm --filter frontend dev
   ```

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, TypeScript, TailwindCSS
- **Desktop**: Electron (future)
- **Mobile**: React Native (future)

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 