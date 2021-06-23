import React from 'react'
import { render, screen } from '@testing-library/react'
import AlbumsCard from '.'

const mockAlbum = {
  id: '1',
  name: 'No Pelo',
  image: 'mockUrl',
  formattedDate: '10/10/2010',
}

describe('AlbumsCard', () => {
  it('should be able render informations in card', () => {
    render(<AlbumsCard album={mockAlbum} />)

    expect(screen.queryByRole('img', { name: 'No Pelo-album' })).toBeDefined()
    expect(screen.queryByText('No Pelo')).toBeDefined()
    expect(screen.queryByText('10/10/2010')).toBeDefined()
  })
})
