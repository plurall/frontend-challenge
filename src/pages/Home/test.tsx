import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'

describe('<Home />', () => {
  it('should have ', () => {
    render(<Home />)
    expect(screen.getByRole('anchor')).toBeInTheDocument()
  })
})
