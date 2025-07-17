Blenheim
--------

1. Install docker
2. `docker build .`
3. `docker volume create blenheim_bind`
4. `docker volume create blenheim_config`
5. `docker run -v blenheim_bind:/etc/bind -v blenheim_config:/app/server/config xxxxxxxxxxxx`

Development Guidelines
----------------------

* Avoid making breaking changes to the protocol. Ensure any protocol modifications remain backward compatible.

Cypress Tests
-------------

1. Install dependencies with `npm install`.
2. Run component tests with `npx cypress run --component`.
3. Coverage reports are generated in `coverage/lcov-report`.

Unit Tests
----------

Run Jest tests and produce a coverage summary with:

```
npm test -- --coverage --watchAll=false
```

The HTML report will be available under `coverage/lcov-report`.
