# Cypress Automation

Cypress E2E and API tests organized by suite.

## Quick start
```bash
git clone <repo-url>
cd cypress-automation
npm install
code .                # open in VS Code (accept the recommended extensions)
npm run cy:open       # interactive runner
```

## Structure
```
cypress/
  e2e/
    smoke/        fast checks run on every push/PR
    regression/   full functional coverage
    api/          cy.request API tests
  fixtures/       test data (JSON)
  pages/          page objects
  support/        custom commands (commands.js) and global hooks (e2e.js)
cypress.config.js
cypress.env.example.json   copy to cypress.env.json for local secrets (git-ignored)
```
Add a new suite by creating `cypress/e2e/<suite>/` and a `cy:run:<suite>` script in `package.json`.

## Commands
| Command | Purpose |
|---|---|
| `npm run cy:open` | Interactive runner |
| `npm run cy:run` | All specs, headless |
| `npm run cy:run:smoke` | Smoke suite |
| `npm run cy:run:regression` | Regression suite |
| `npm run cy:run:api` | API suite |
| `npm run lint` | ESLint |

In VS Code: **Terminal > Run Task...** lists the same commands.

## CI
`.github/workflows/cypress.yml` runs smoke on push/PR; use **Actions > Run workflow** to pick a suite.
Failure screenshots and videos are uploaded as artifacts.

## Rules for a public repo
- Never commit credentials. Use `cypress.env.json` locally (git-ignored) and GitHub Secrets in CI.
- Use test accounts and non-production data.
