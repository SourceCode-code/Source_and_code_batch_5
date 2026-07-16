# ⭐ sid-cypress-rerun-failed

A Cypress plugin and CLI tool that automatically **reruns only failed spec files** from the previous Cypress run.  
It helps reduce flaky failures, saves CI time, and avoids rerunning the entire test suite.

---

## ❓ What problem does this solve?

In real-world Cypress projects:

- Tests can be **flaky**
- CI pipelines fail even when reruns would pass
- Rerunning the **entire suite** is slow and expensive

### ✅ This plugin solves that by:
- Detecting **only failed spec files**
- Rerunning **only those specs**
- Optionally auto‑rerunning in CI (opt‑in, safe by default)

---

## 📦 Installation

Install as a dev dependency:

```bash
npm install sid-cypress-rerun-failed --save-dev

## JavaScript cypress.config.js


const rerunFailed = require("sid-cypress-rerun-failed");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      rerunFailed(on, config);
      return config;
    }
  }
};

## TypeScript (cypress.config.ts)


import rerunFailed from "sid-cypress-rerun-failed";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      rerunFailed(on, config);
      return config;
    }
  }
});

▶️ How to Use
Step 1: Run Cypress normally
npx cypress run
If any specs fail, the plugin generates:

cypress/failed-specs.json
Step 2: Rerun only failed specs
npx cypress-rerun-failed
Only the failed spec files from the last run are executed.

⚙️ CLI Commands & Options
npx cypress-rerun-failed [options]
Available Options
Option	Description
--browser <name>	Run in a specific browser (chrome, firefox, edge)
--headed	Run Cypress in headed (UI) mode
--retries <number>	Retry failed specs N times
--help	Show CLI help
Example Commands
# Basic rerun
npx cypress-rerun-failed

# Run in Chrome
npx cypress-rerun-failed --browser chrome

# Headed mode
npx cypress-rerun-failed --headed

# Retry failed specs twice
npx cypress-rerun-failed --retries 2

# Combine options
npx cypress-rerun-failed --browser chrome --headed --retries 2
🔁 CI Usage (Optional & Safe)
Auto‑rerun is disabled by default.

Enable via environment variables
macOS / Linux
export CYPRESS_RERUN_FAILED=true
export CYPRESS_RERUN_MAX_ATTEMPTS=2
Windows (PowerShell)
$env:CYPRESS_RERUN_FAILED="true"
$env:CYPRESS_RERUN_MAX_ATTEMPTS="2"
Example: GitHub Actions
env:
  CYPRESS_RERUN_FAILED: "true"
  CYPRESS_RERUN_MAX_ATTEMPTS: "2"
CI Behavior
Initial Cypress run executes

Failed specs are detected

Only failed specs are rerun

Stops after max retry attempts

Proper exit codes for CI pipelines

📂 Generated Files
File	Purpose
cypress/results/*.json	Mochawesome JSON reports
cypress/failed-specs.json	List of failed spec files
🛡️ Why this plugin is safe
Auto‑rerun is opt‑in

Max retry protection (no infinite loops)

No network calls

No postinstall scripts

Cross‑platform (Windows / macOS / Linux)

🧩 TypeScript Support
TypeScript typings are included.

import rerunFailed from "sid-cypress-rerun-failed";
📄 License
MIT

👤 Author
Siddhant Gadakh