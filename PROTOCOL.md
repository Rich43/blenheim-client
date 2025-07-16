# Protocol Description

This document summarizes how the client communicates with the server. The repository is a React front-end that uses Apollo Client to talk to a GraphQL API.

## Endpoint

All requests are sent to `/graphql`. In development this path is proxied to `http://localhost:8000` by `src/setupProxy.js`, while in production `nginx/default.conf.template` forwards it to `http://${BLENHEIM_SERVER_HOST}:8000/graphql`.

## Authentication

The `Login` query performs authentication:

```graphql
query Login($username: String!, $password: String!) {
    authentication {
        login(details: {name: $username, password: $password})
    }
}
```

On success the server returns a token string. The client stores the token in `localStorage` and includes it in the `Authorization` header for subsequent requests (see `src/graphQL.ts`).

## Queries

The main GraphQL queries are:

- **Dns** – retrieves DNS generation results.
- **Settings** – returns `defaultSubdomains`, `ipv4`, and `ipv6` lists.
- **Domains** – returns domain entries and their subdomains along with `ipv4`, `ipv6`, and `defaultSubdomains` values.

## Mutations

Under the `settings` field the API exposes several mutations to manage DNS configuration:

- `createDomain(id: ID!, subdomains: [String!]!)`
- `createSubDomain(id: ID!, name: String!)`
- `createDefaultSubDomain(id: ID!)`
- `createIpv4(id: ID!)`
- `createIpv6(id: ID!)`
- `deleteDomain(id: ID!)`
- `deleteSubDomain(id: ID!, index: Int!)`
- `deleteSubDomainIpAddressV4(id: ID!, index: Int!)`
- `deleteSubDomainIpAddressV6(id: ID!, index: Int!)`
- `deleteDefaultSubDomain(index: Int!)`
- `deleteIpv4(index: Int!)`
- `deleteIpv6(index: Int!)`
- `updateDomain(id: ID!, newName: String!)`
- `updateSubDomain(id: ID!, index: Int!, name: String!)`
- `updateSubDomainIpAddressV4(id: ID!, index: Int!, name: String!)`
- `updateSubDomainIpAddressV6(id: ID!, index: Int!, name: String!)`
- `updateDefaultSubDomain(id: ID!, index: Int!)`
- `updateIpv4(id: ID!, index: Int!)`
- `updateIpv6(id: ID!, index: Int!)`

These operations return either a `Domain` object or an updated `Settings` object depending on the operation. The mutations allow clients to add, modify, or remove domains, subdomains and IP addresses without breaking existing consumers.

## Responses

Many mutations and queries return complex objects such as `Settings` or `Domain`, defined in `graphql.schema.json`. For example, a `Domain` includes an `id` and a list of `SubDomain` objects (`id`, `ipAddressV4`, `ipAddressV6`). The `Dns` query returns a `generate` field of type `Result` with fields `code`, `error`, `extra`, and `success`.

## Backward Compatibility

The repository's README stresses that protocol changes should remain backward compatible. When introducing new fields or mutations, ensure existing clients continue to operate without modification.
