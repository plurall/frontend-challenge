import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Busca from '../Busca'

jest.mock('utils', () => ({
  SomosClient: jest.fn().mockImplementation(() => ({
    searchArtists: jest.fn().mockResolvedValue({
      artists: {
        items: [
          {
            id: '1',
            name: 'Artista de Teste',
            images: [{ url: 'https://example.com/image.jpg' }],
          },
        ],
      },
    }),
  })),
}))

const renderWithRouter = (ui) => render(
  <BrowserRouter>
    {ui}
  </BrowserRouter>,
)

describe('Página de Busca', () => {
  it('renderiza o input de busca corretamente', () => {
    renderWithRouter(<Busca />)

    const inputElement = screen.getByPlaceholderText('Digite o nome de um artista')
    expect(inputElement).toBeInTheDocument()
  })
})
