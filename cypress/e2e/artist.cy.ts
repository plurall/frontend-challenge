describe('Testes da Página do Artista', () => {
  beforeEach(() => {
    // Garantir que estamos logados antes de visitar a página
    cy.loginWithSpotify();
    cy.visit('/artista/3AA28KZvwAUcZuOKwyblJQ');
  });

  it('deve mostrar o nome do artista', () => {
    // Verifica se o nome "Gorillaz" aparece na página
    cy.get('[data-testid="artist-name"]').should('contain', 'Gorillaz');
  });

  it('deve ter ao menos um álbum na lista', () => {
    // Verifica se há pelo menos um álbum na lista de álbuns
    cy.get('[data-cy="album-card"]').should('have.length.greaterThan', 0);
  });
});
