import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  it('should match its snapshot', () => {
    const tree = shallow(<App />)

    expect(tree).toMatchSnapshot()
  })
})
