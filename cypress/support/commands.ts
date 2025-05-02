/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    interface Chainable<Subject = any> {
      loginWithSpotify(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('loginWithSpotify', () => {
  const clientId = Cypress.env('SPOTIFY_CLIENT_ID');
  const clientSecret = Cypress.env('SPOTIFY_CLIENT_SECRET');

  if (!clientId || !clientSecret) {
    throw new Error('Client ID ou Secret não configurado no cypress.env.json');
  }

  const basicAuth = btoa(`${clientId}:${clientSecret}`);

  cy.request({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials',
    form: true
  }).then((response) => {
    const { access_token } = response.body;
    cy.log('Token Spotify obtido com sucesso');
    localStorage.setItem('access_token', access_token);
  });
});

export {}; // This makes the file a module