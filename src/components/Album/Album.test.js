import React from 'react'
import { render, screen } from '@testing-library/react'

import Album from './Album'

const albumMock = {
  name: 'Tô Achando Que É Amor',
  release_date: '2020-12-04',
  image: 'https://i.scdn.co/image/ab67616d00001e0220d711e24ec947c793012af5',
}

describe('Album.jsx', () => {
  test(`Given that the component has rendered
    and received the data prop containing the album data,
    should render image, name and release date of album.`, () => {
    const textsOnScreen = ['Tô Achando Que É Amor', '04/12/2020']

    render(<Album data={albumMock} />)

    textsOnScreen.forEach(text => expect(screen.getByText(text)).toBeVisible())
    expect(screen.getByAltText('Capa do album Tô Achando Que É Amor'))
  })

  test(`Given that the component has rendered
	and not received the data prop,
	should not render the album container.`, () => {
    render(<Album />)

    expect(screen.queryByTestId('album')).not.toBeInTheDocument()
  })
})
