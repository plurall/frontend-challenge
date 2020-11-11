import React from 'react'
import { shallow } from 'enzyme'

import Home from './index'

describe('Home', () => {
  it('should match its snapshot', () => {
    const tree = shallow(<Home />)

    expect(tree).toMatchSnapshot()
  })
})
