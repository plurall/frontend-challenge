import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe('Home component', () => {
  test('renders', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.exists()).toBe(true)
  })

  test('has button', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(Link).props().to).toBe('/busca')
  })
})
