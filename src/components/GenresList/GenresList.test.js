import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

import GenresList from './GenresList'

Enzyme.configure({ adapter: new Adapter() })

describe('<GenresList />', () => {
  const genres = [
    'alternative dance',
    'indietronica',
    'new rave',
  ]

  it('should render genres list when mount', () => {
    const wrapper = shallow(<GenresList genres={genres} />)
    expect(wrapper.find('li')).toHaveLength(3)
  })
})
