const { isGreaterThanFour } = require('./utils')

test('Deve retornar se texto digitado for maior que 4.', () => {
  expect(isGreaterThanFour('busca artista')).toBeTruthy()
})

test('Deve retornar se texto digitado for menor que 4.', () => {
  expect(isGreaterThanFour('busc')).toBeFalsy()
})
