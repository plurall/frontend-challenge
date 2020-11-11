import React from 'react'
import { shallow } from 'enzyme'

import Search from './index'

describe('Search', () => {
  it('should match its snapshot', () => {
    const tree = shallow(<Search />)

    expect(tree).toMatchSnapshot()
  })
})
