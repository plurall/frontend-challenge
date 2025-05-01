describe('Página Home', () => {
  it('mostra a tela de login quando não logado', () => {
    cy.visit('/');
    cy.get('[data-cy="not-logged-in-title"]').should('be.visible').and('contain.text', 'Acesse com o Spotify');
    cy.get('[data-cy="spotify-login-button"]').should('be.visible').and('contain.text', 'Spotify').click();
  });
});
