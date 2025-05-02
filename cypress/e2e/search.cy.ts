describe('Testes da Página de Busca e Subcomponentes', () => {
  beforeEach(() => {
    // Garantir que estamos logados antes de visitar a página
    cy.loginWithSpotify();
    cy.visit('/busca');
  });

  it('deve permitir a busca de um artista e mostrar resultados', () => {
    // Digita "Gorillaz" no campo de pesquisa
    cy.get('[data-cy="search-input"]')
      .type('Gorillaz')
      .should('have.value', 'Gorillaz'); // Verifica se o valor foi inserido corretamente

    // Clica no botão de pesquisa
    cy.get('[data-cy="search-button"]').click();

    // Verifica se aparece o artista "Gorillaz" nos resultados
    cy.get('[data-cy="search-artist"]').should('contain', 'Gorillaz');
  });

  it('deve mostrar um artista específico na lista de resultados ao pesquisar', () => {
    // Simula uma pesquisa por "Gorillaz"
    cy.get('[data-cy="search-input"]').type('Gorillaz');
    cy.get('[data-cy="search-button"]').click();

    // Verifica se o nome do artista "Gorillaz" aparece
    cy.get('[data-cy="search-artist"]').contains('Gorillaz');
  });
});
