import React from 'react'
import { render, screen } from '@testing-library/react'

import ArtistIntro from './ArtistIntro'

const artistMock = {
  name: 'Péricles',
  popularity: 72,
  photograph:
    'https://i.scdn.co/image/a2660d83578f7fe5af4e7c0c58d37468bad6b532',
  genres: ['pagode', 'pagode novo'],
}

describe('ArtistIntro.jsx', () => {
  test(`Given that the component was rendered
    and received the artist prop,
    should show name, popularity, photograph and list of genres of artist.`, () => {
    const textsOnScreen = [
      'Péricles',
      'Popularidade: 72',
      'Gêneros: pagode, pagode novo',
    ]

    render(<ArtistIntro artist={artistMock} />)

    textsOnScreen.forEach(text => expect(screen.getByText(text)).toBeVisible())
    expect(screen.getByAltText('Foto do artista Péricles')).toBeVisible()
  })
})
