# Contributor Guidelines

This repository is a React + TypeScript project. The following conventions help keep the codebase consistent.

## Development
- Install dependencies with `npm install`.
- Run unit tests with `npm test -- --coverage --watchAll=false` before committing.
- Run component tests with `npm run test:cypress` when relevant.
- Avoid breaking changes to the protocol defined under `PROTOCOL.md`. Keep client/server interactions backward compatible.

## Code Style
- Use **4 spaces** for indentation.
- Prefer **single quotes** for string literals in TypeScript and JavaScript files.
- Ensure every file ends with a single trailing newline.

## Commits
- Use concise commit messages in the present tense (e.g. `Add DNS settings form`).
- Group related changes into a single commit.

Following these practices helps maintainers review changes quickly and keeps the project healthy.
