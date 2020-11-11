import React from 'react'
import { shallow } from 'enzyme'

import AlbumsList from './index'

describe('AlbumsList', () => {
  const albums = [
    {
      name: 'Rebel Heart Tour (Live)',
      release_date: '2017-09-15',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/ab67616d0000b273fa3f9b299ec4a1b18164726d',
          width: 640,
        },
      ],
    },
  ]

  it('should show ImageCard in AlbumsList if prop albums exists', () => {
    const wrapper = shallow(<AlbumsList albums={albums} />)

    expect(wrapper.find('ImageCard')).toHaveLength(1)
  })

  it('should not show ImageCard in AlbumsList if prop albums not exists', () => {
    const wrapper = shallow(<AlbumsList />)

    expect(wrapper.find('ImageCard')).toHaveLength(0)
  })
})
