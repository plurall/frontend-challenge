import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.2'
import { Heading, Text } from '@plurall/elo'
import GenreList from './GenreList'

Enzyme.configure({ adapter: new Adapter() })

describe('<GenreList />', () => {
  const data = ['alternative metal', 'nu metal']

  it('should render have Heading when mount', () => {
    const wrapper = shallow(<GenreList data={data} />)
    expect(wrapper.find(Heading)).toHaveLength(1)
  })

  it('should render a genrer tag', () => {
    const wrapper = shallow(<GenreList data={data} />)
    expect(wrapper.find(Text).length >= 1)
  })
})
