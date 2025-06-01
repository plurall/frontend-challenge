import { render, screen } from '@testing-library/react'
import ArtistCard from './ArtistCard'
import React from 'react'

describe('ArtistCard', () => {
  it('renders the artist name', () => {
    render(<ArtistCard name='Daft Punk' />)
    expect(screen.getByText('Daft Punk')).toBeInTheDocument()
  })

  it('renders the artist image when imageUrl is provided', () => {
    render(<ArtistCard name='Daft Punk' imageUrl='/daftpunk.jpg' />)
    const image = screen.getByRole('img') as HTMLImageElement
    expect(image.src).toContain('/daftpunk.jpg')
    expect(image.alt).toBe('Daft Punk')
  })

  it('uses placeholder image when imageUrl is not provided', () => {
    render(<ArtistCard name='Daft Punk' />)
    const image = screen.getByRole('img') as HTMLImageElement
    expect(image.src).toContain('/placeholder.png')
  })
})
