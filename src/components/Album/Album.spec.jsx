import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { render } from '@testing-library/react'

import Album from '.'

describe('Album', () => {
  it('should render properly', () => {
    const album = {
      name: 'Live Around The World (Deluxe)',
      release_date: '2020-10-02',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27372a659e4c3bda377f2e9b162',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0272a659e4c3bda377f2e9b162',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485172a659e4c3bda377f2e9b162',
          width: 64,
        },
      ],
    }

    const { getByText, getByRole } = render(
      <MemoryRouter>
        <Album album={album} />
      </MemoryRouter>,
    )

    expect(getByText('Live Around The World (Deluxe)')).toBeInTheDocument()
    expect(getByText('02/10/2020')).toBeInTheDocument()
    expect(getByRole('img')).toHaveAttribute('src', 'https://i.scdn.co/image/ab67616d0000b27372a659e4c3bda377f2e9b162')
  })
})
