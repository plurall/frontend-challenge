import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ArtistItem from '.'
import { Artist } from '../../../utils/types'

const fakeArtist: Artist = {
  id: 'any_id',
  name: 'any_name',
  popularity: 0,
  genres: ['any_genre'],
  images: [{ width: 0, url: 'any_url', height: 0 }]
}

describe('<ArtistItem />', () => {
  it('should have link with correct url and id', () => {
    render(<MemoryRouter>
      <ArtistItem artist={fakeArtist} />
    </MemoryRouter>)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/artista/any_id')
  })
})
