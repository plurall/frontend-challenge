import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.2'
import { Heading } from '@plurall/elo'
import Album from './Album'

Enzyme.configure({ adapter: new Adapter() })

describe('<Album />', () => {
  const data = [
    {
      album_group: 'album',
      id: '4cUVZzT8zNBkHjBfd4WiWS',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/76fb60e3068081dc1061897a413bf854802a8a5a',
          width: 640,
        },
        {
          height: 640,
          url:
            'https://i.scdn.co/image/76fb60e3068081dc1061897a413bf854802a8a5a',
          width: 640,
        },
      ],
      name: 'Dictator',
      release_date: '2018-07-20',
      total_tracks: 12,
    },
  ]

  // beforeEach(() => {})
  it('should render have Heading when mount', () => {
    const wrapper = shallow(<Album data={data} />)
    expect(wrapper.find(Heading)).toHaveLength(1)
  })
})
