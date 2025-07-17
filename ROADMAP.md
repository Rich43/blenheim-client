# Project Roadmap

This document outlines the planned features for the Blenheim client and lists the functionality that is already implemented.

## Completed Features

- **Authentication** – Users can log in and log out via the `/graphql` API, and tokens are stored in local storage.
- **Domain Management** – CRUD operations for domains and subdomains are available through dialogs in the UI.
- **DNS Settings** – IPv4, IPv6, and default subdomain settings are configurable.
- **GraphQL Integration** – All data is fetched and mutated through Apollo Client with a type-safe codegen setup.
- **Docker & Deployment** – A `Dockerfile` and Kubernetes deployment manifest are provided for containerized deployments.
- **Testing Infrastructure** – Jest unit tests and Cypress component tests are configured with coverage reporting.

## Upcoming Roadmap

### Short Term

- **UI Polish** – Improve page layouts and navigation for smaller screens.
- **Error Handling** – Display friendlier error messages for network and server failures.
- **Continuous Integration** – Add automated test runs and lints in CI.

### Medium Term

- **Role-Based Access** – Introduce user roles (admin vs read-only) with corresponding permissions.
- **Audit Logs** – Track domain and settings changes per user.
- **Search & Filtering** – Allow quick filtering of domains and subdomains by name.

### Long Term

- **Bulk Import/Export** – Support uploading and downloading domain configurations as JSON or CSV.
- **Notifications** – Send email or Slack alerts when DNS settings change.
- **Plugin API** – Provide extension points for custom DNS management logic.

