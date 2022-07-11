import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { render } from '@testing-library/react'

import Album from '.'

const album = {
  name: 'Live Around The World (Deluxe)',
  release_date: '2020-10-02',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b27372a659e4c3bda377f2e9b162',
      width: 640,
    },
  ],
}

describe('Album', () => {
  it('should render properly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Album album={album} />
      </MemoryRouter>,
    )

    expect(getByText('Live Around The World (Deluxe)')).toBeInTheDocument()
  })

  it('formats correctly the passed date', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Album album={album} />
      </MemoryRouter>,
    )

    expect(getByText('02/10/2020')).toBeInTheDocument()
  })

  it('renders the album image on the screen', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Album album={album} />
      </MemoryRouter>,
    )

    expect(getByRole('img')).toHaveAttribute(
      'src',
      'https://i.scdn.co/image/ab67616d0000b27372a659e4c3bda377f2e9b162',
    )
  })
})
