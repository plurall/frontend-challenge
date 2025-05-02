/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
})
