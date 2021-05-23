import React from 'react'
import { render } from '@testing-library/react'

import Loading from './Loading'

describe('<Loading />', () => {
  it('should render Loading component', () => {
    const { container, findByText } = render(<Loading />)

    expect(findByText('Carregando...'))
    expect(container).toMatchSnapshot()
  })
})
