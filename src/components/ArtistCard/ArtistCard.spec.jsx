import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { render } from '@testing-library/react'

import Artist from '.'

const artist = {
  id: '1dfeR4HaWDbWqFHLkxsg1d',
  name: 'Queen',
  images: [
    {
      height: 806,
      url: 'https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982',
      width: 999,
    },
  ],
}

const noImageArtist = {
  id: '0QKGmGlRGaEsmlYJ2GBRgC',
  name: '.......X',
  images: [],
}

describe('ArtistCard', () => {
  it('should render properly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Artist artist={artist} />
      </MemoryRouter>,
    )

    expect(getByText('Queen')).toBeInTheDocument()
  })

  it('should render the artist image on the screen', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Artist artist={artist} />
      </MemoryRouter>,
    )

    expect(getByRole('img')).toHaveAttribute(
      'src',
      'https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982',
    )
  })

  it('should render correct url to artist page', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Artist artist={artist} />
      </MemoryRouter>,
    )

    expect(getByRole('link')).toHaveAttribute(
      'href',
      '/artista/1dfeR4HaWDbWqFHLkxsg1d',
    )
  })

  it('should display placeholder when artist has no image', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Artist artist={noImageArtist} />
      </MemoryRouter>,
    )

    expect(getByText('Imagem não encontrada')).toBeInTheDocument()
  })
})
