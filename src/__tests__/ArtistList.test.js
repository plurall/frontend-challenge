import React from 'react'
import { shallow } from 'enzyme'
import { ArtistList } from 'components'
import ArtistItem from 'components/ArtistItem/ArtistItem'

describe('Test for Artist List', () => {
  test('the list should have the correct size', () => {
    const artists = [
      {
        images: [{ url: 'http://test.com/image.png' }],
        name: 'artista1',
        id: 1,
      },
      {
        images: [{ url: 'http://test.com/image2.png' }],
        name: 'artista2',
        id: 2,
      },
      {
        images: [{ url: 'http://test.com/image3.png' }],
        name: 'artista3',
        id: 3,
      },
    ]

    const wrapper = shallow(<ArtistList artists={artists} />)

    const items = wrapper.find(ArtistItem)

    expect(items.length).toBe(3)
  })
})
