import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Search from 'components/Search'
import { Home } from 'views'

afterEach(() => jest.clearAllMocks())

it('Verifica se existe um título (h1) na tela Home', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )

  const h1Title = screen.getByRole(
    'heading',
      {
        level: 1,
        name: 'Pesquise seu artista favorito',
      })

  expect(h1Title).toBeInTheDocument()
  expect(h1Title).toHaveTextContent('Pesquise seu artista favorito')
})

it('Verifica se existe um botão "Pesquisar" na tela Home', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )

  const button = await screen.findByRole('button')

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Pesquisar')
})

it('Verifica se ao clicar no botão Pesquisar, redireciona para a tela Search', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )

  const btnLink = screen.getByRole('link', { name: 'Pesquisar' })
  userEvent.click(btnLink)

  expect(btnLink).toBeInTheDocument()
})


it('Verifica se existe um input de Pesquisar pelo Artista na tela Search', () => {
  render(<Search />)
  const input = screen.getByPlaceholderText('Digite o nome do artista')

  expect(input).toBeInTheDocument()
  expect(input.type).toBe('text')
  expect(input).toHaveClass('input-artist-name')
})

it('Verifica se renderiza o card com foto e nome do artista na tela Search', async () => {
  const response = {
    artists: {
      items: [
      {
        images: [
          {
            url: 'teste',
          },
          {
            url: 'https://i.scdn.co/image/ab6761610000e5eb1313a3881791f8f2afd8611d',
          },
        ],
        id: '1PwOU6fFbmaGkK3wkbb8fU',
        name: 'cazuza',
      },
  ] } }

  jest.spyOn(global, 'fetch')
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(response),
  })

  render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>,
  )
  const input = screen.getByPlaceholderText('Digite o nome do artista')

    userEvent.type(input, 'cazuz')


  const img = await screen.findByRole('img')
  const name = await screen.findByText('cazuza')

  expect(img).toBeInTheDocument()
  expect(img).toHaveAttribute('src', 'https://i.scdn.co/image/ab6761610000e5eb1313a3881791f8f2afd8611d')
  expect(name).toBeInTheDocument()
  expect(name).toHaveTextContent('cazuza')
})

