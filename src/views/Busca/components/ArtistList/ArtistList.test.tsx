import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ArtistList from './ArtistList'

const mockArtists: any = [
  {
    id: '1',
    name: 'Artist 1',
    type: 'artist',
    images: [{ url: 'https://example.com/image1.jpg' }],
  },
  {
    id: '2',
    name: 'Artist 2',
    type: 'artist',
    images: [],
  },
]

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('ArtistList', () => {
  test('não deve renderizar nada quando a lista de artistas está vazia', () => {
    const { container } = renderWithRouter(<ArtistList artists={[]} />)
    expect(container.firstChild).toBeNull()
  })

  test('deve renderizar múltiplos ArtistItems com as propriedades corretas', () => {
    renderWithRouter(<ArtistList artists={mockArtists} />)

    // Verifica se os nomes dos artistas estão presentes
    expect(screen.getByText('Artist 1')).toBeInTheDocument()
    expect(screen.getByText('Artist 2')).toBeInTheDocument()

    // Verifica se os tipos dos artistas estão presentes
    const artistTypes = screen.getAllByText('artist')
    expect(artistTypes).toHaveLength(2)
  })
})
