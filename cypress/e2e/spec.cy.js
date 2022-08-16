describe('Buscar um artista', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/busca')

    cy.get('input').type('nirv')
  })
})
