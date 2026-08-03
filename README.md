# cypress-api

API testing suite built with Cypress, covering request interception, response 
mocking, and full CRUD workflows against a live REST API (Conduit / RealWorld API).

## What this covers
- API request interception and mocking with fixtures
- Modifying API responses on the fly to test frontend behavior
- Waiting on network calls and asserting on response payloads
- Full CRUD flow: authenticate, create, verify, delete via `cy.request`
- Token-based authentication — logging in via API and injecting the JWT 
  directly into localStorage to bypass UI login
- Test data generation with Faker

## Tech stack
- Cypress
- JavaScript
- Faker.js

## Structure
- `cypress/e2e/workingWithAPIs.cy.js` — test cases
- `cypress/support/commands.js` — custom commands (API-based login)
- `cypress/fixtures/` — mock response data

## How to run
npx cypress open
