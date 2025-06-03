import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ArtistItem from './ArtistItem'

const mockArtist = {
  id: '123',
  name: 'Test Artist',
  type: 'Artist',
  imageUrl: 'https://example.com/image.jpg'
}

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('ArtistItem', () => {
  test('deve renderizar o nome e tipo do artista corretamente', () => {
    renderWithRouter(<ArtistItem {...mockArtist} />)
    
    expect(screen.getByText(mockArtist.name)).toBeInTheDocument()
    expect(screen.getByText(mockArtist.type)).toBeInTheDocument()
  })

  test('deve usar imagem padrão quando imageUrl não é fornecida', () => {
    renderWithRouter(<ArtistItem {...mockArtist} imageUrl="" />)
    
    const image = screen.getByAltText(mockArtist.name) as HTMLImageElement
    expect(image.src).toContain('/default-artist.png')
  })
})