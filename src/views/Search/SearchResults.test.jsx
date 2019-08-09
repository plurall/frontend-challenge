import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchResults from './SearchResults'

Enzyme.configure({ adapter: new Adapter() })

describe('SearchResults component', () => {
  const mockArtist = [
    {
      id: '3fMbdgg4jU18AjLCKBhRSm',
      name: 'Michael Jackson',
      images: [
        {
          url:
            'https://i.scdn.co/image/51dad9aaabe5643818840207a9a8957c2ad91bf2',
        },
      ],
    },
  ]

  test('renders', () => {
    const wrapper = shallow(<SearchResults artists={mockArtist} />)
    expect(wrapper.exists()).toBe(true)
  })
})
