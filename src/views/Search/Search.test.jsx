import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from './Search'

Enzyme.configure({ adapter: new Adapter() })

describe('Search component', () => {
  test('renders', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.exists()).toBe(true)
  })

  test('user text is inputed', () => {
    const wrapper = shallow(<Search />)
    wrapper.find('input').simulate('change', { target: { value: 'REM' } })
    expect(wrapper.find('input').props().value).toEqual('REM')
  })
})
