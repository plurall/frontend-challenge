import React from 'react'
import { render, screen } from '@testing-library/react'

import ArtistIntro from './ArtistIntro'

const artistMock = {
    name: 'Péricles',
    popularity: 72,
    photograph: 'https://i.scdn.co/image/a2660d83578f7fe5af4e7c0c58d37468bad6b532',
    genres: ['pagode', 'pagode novo']
}

describe('ArtistIntro.jsx', () => {
    test(`Given that the component was rendered
    and received the artist prop,
    should show name, popularity, photograph and list of genres of artist.`, () => {
        const textsOnScreen = [
            'Péricles',
            'Popularidade: 72',
            'Generos: pagode, pagode novo',
        ]

        render(<ArtistIntro artist={artistMock} />)

        textsOnScreen.forEach(text =>
            expect(screen.getByText(text)).toBeVisible()
        )
        expect(screen.getByAltText('Foto do artista Péricles')).toBeVisible()
    })

    test(`Given that the component was rendered
    and not received the artist prop,
    should render only a message informing that the artist is not found.`, () => {
        render(<ArtistIntro />)

        expect(screen.getByText('O artista não foi encontrado.')).toBeVisible()
        expect(screen.queryByTestId('artist-intro')).not.toBeInTheDocument()
    })
})