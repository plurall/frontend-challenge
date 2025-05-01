// cypress/e2e/home-conditional.cy.ts
describe('Página Home - Teste Condicional', () => {
  context('Cenário: Usuário não logado', () => {
    beforeEach(() => {
      // Limpar tokens para simular usuário não logado
      cy.clearLocalStorage();
      cy.visit('/');
    });

    it('mostra a tela de login quando não logado', () => {
      cy.get('[data-cy="not-logged-in-title"]')
        .should('be.visible')
        .and('contain.text', 'Acesse com o Spotify');
      
      cy.get('[data-cy="spotify-login-button"]')
        .should('be.visible')
        .and('contain.text', 'Spotify');
    });
  });

  context('Cenário: Usuário logado', () => {
    beforeEach(() => {
      // Garantir que estamos logados antes de visitar a página
      cy.loginWithSpotify();
      cy.visit('/');
    });

    it('mostra a interface de usuário logado', () => {
      cy.get('[data-cy="logged-in-title"]')
        .should('be.visible')
        .and('contain.text', 'Buscar Artista');
      
      cy.get('[data-cy="logged-in-button"]')
        .should('be.visible')
        .and('contain.text', 'Ir para Busca');
    });

    it('navega para a página de busca ao clicar no botão', () => {
      cy.get('[data-cy="logged-in-button"]').click();
      cy.url().should('include', '/busca');
    });
  });
});