import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.2'
import { Heading } from '@plurall/elo'
import Box from './Box'

Enzyme.configure({ adapter: new Adapter() })

describe('<Box />', () => {
  const data = [
    {
      id: '5vbtZfRJjn2QLhPhtYpiqi',
      name: 'Daron Malakian and Scars On Broadway',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/e7532cc208d856876f85f7b3397d864d44ac782c',
          width: 640,
        },
        {
          height: 320,
          url:
            'https://i.scdn.co/image/f69f37c569ed03907185c81774ee25991659333a',
          width: 320,
        },
      ],
    },
  ]

  it('should render have Heading when mount', () => {
    const wrapper = shallow(<Box data={data} />)
    expect(wrapper.find(Heading)).toHaveLength(1)
  })

  it('should render a image when mount', () => {
    const wrapper = shallow(<Box data={data} />)
    expect(wrapper.find('img')).toHaveLength(1)
  })
})
