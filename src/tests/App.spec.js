import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { Home, Search } from 'views'

afterEach(() => jest.clearAllMocks())

it('should see if there is a title in the Home with h1', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )

  const h1Title = screen.getByRole('heading', {
    level: 1,
    name:
      'Bem vindo a busca de artitas do Spotify, clique no botão abaixo e encontre seu favorito.',
  })

  expect(h1Title).toBeInTheDocument()
})

it('should check button redirection for Search component', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )

  const btnLink = screen.getByRole('link', { name: 'Buscar artitas' })
  userEvent.click(btnLink)

  expect(btnLink).toBeInTheDocument()
})

it('shoould check if there is an input element in the Search component', () => {
  render(<Search />)
  const input = screen.getByPlaceholderText(
    'Busque aqui seu artista favorito...',
  )

  expect(input).toBeInTheDocument()
})
