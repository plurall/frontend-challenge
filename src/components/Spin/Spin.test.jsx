import React from 'react'
import { render, screen } from '@testing-library/react'
import Spin from '.'

describe('Spin', () => {
  it('should be able render loading when spinning true', () => {
    render(
      <Spin spinning>
        <span>children</span>
      </Spin>,
    )

    expect(screen.queryByTestId('spin-container')).toBeDefined()
    expect(screen.queryByText('children')).toBeNull()
  })

  it('should be able render children when spinning false', () => {
    render(
      <Spin spinning={false}>
        <span>children</span>
      </Spin>,
    )

    expect(screen.queryByTestId('spin-container')).toBeNull()
    expect(screen.queryByText('children')).toBeDefined()
  })
})
