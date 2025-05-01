// cypress/support/setup-spotify.ts

/**
 * Este script realiza o login no Spotify uma única vez antes de todos os testes
 * e armazena o token para reutilização, melhorando significativamente a performance dos testes
 */

// Fazemos login antes de qualquer teste começar
before(() => {
  // Limpar os tokens existentes para forçar um novo login
  localStorage.removeItem('cypress_spotify_token');
  localStorage.removeItem('cypress_spotify_token_expiry');
  localStorage.removeItem('access_token');
  localStorage.removeItem('code_verifier');
  
  // Realizar o login uma única vez
  cy.loginWithSpotify();
});

// Antes de cada teste, garantimos que o token está disponível
// mas não fazemos login novamente se não for necessário
beforeEach(() => {
  // Restaurar o token do armazenamento global para o localStorage atual
  const token = localStorage.getItem('cypress_spotify_token');
  if (token) {
    localStorage.setItem('access_token', token);
  } else {
    // Caso não tenhamos um token (improvável após o before), fazemos login
    cy.loginWithSpotify();
  }
});