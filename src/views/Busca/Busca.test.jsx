import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Busca from './Busca'
import { SomosClient } from 'utils'
import { MemoryRouter } from 'react-router-dom'

// Mocks
jest.mock('utils', () => ({
  SomosClient: jest.fn().mockImplementation(() => ({
    getArtists: jest.fn(),
  })),
}))

describe('Busca component', () => {
  let mockGetArtists

  beforeEach(() => {
    mockGetArtists = jest.fn()
    SomosClient.mockImplementation(() => ({
      getArtists: mockGetArtists,
    }))
  })

  it('renderiza input de busca', () => {
    render(<Busca />)
    const input = screen.getByPlaceholderText(/Digite sua busca/i)
    expect(input).toBeInTheDocument()
  })

  it('atualiza o estado de busca quando digita', () => {
    render(<Busca />)
    const input = screen.getByPlaceholderText(/Digite sua busca/i)
    fireEvent.change(input, { target: { value: 'Metallica' } })
    expect(input).toHaveValue('Metallica')
  })

  it('faz chamada à API ao digitar mais de 4 caracteres', async () => {
    const mockInstance = new SomosClient()
    mockInstance.getArtists.mockResolvedValueOnce({
      artists: { items: [{ id: '1', name: 'Test Artist', type: 'artist', images: [] }] },
    })

    render(
      <MemoryRouter>
        <Busca />
      </MemoryRouter>,
    )

    const input = screen.getByPlaceholderText(/Digite sua busca/i)
    fireEvent.change(input, { target: { value: 'Metallica' } })

    await waitFor(() => {
      expect(mockInstance.getArtists).toHaveBeenCalledWith('Metallica')
    })
  })
})
