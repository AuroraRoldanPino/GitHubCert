# GitHub Actions Node.js example

Minimal project intended to run with the supplied GitHub Actions workflow.

## Requirements

- Node.js 20 or newer
- npm

## Commands

```bash
npm ci
npm run test:coverage
npm run test:integration
npm run build
```

No third-party npm dependencies are required. Tests use Node.js's built-in `node:test` module.

## Notes about the workflow

- `npm ci` requires `package-lock.json`, included here.
- `npm run test:coverage` runs unit tests with Node's built-in experimental coverage report and creates `coverage/README.txt` for artifact upload.
- `npm run test:integration` runs the integration test.
- `npm run build` creates `dist/index.js`.
- `DATABASE_URL` is not used by these sample tests, so `TEST_DATABASE_URL` does not need to be configured for this example.
- The workflow's `npm audit --audit-level=high` should pass because this sample has no third-party dependencies, although audit availability depends on npm registry access.
