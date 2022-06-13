import '@testing-library/react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'React'
import Home from './Home'
import { MemoryRouter } from 'react-router-dom'

test('get initial redirect text', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
  expect(getByTestId('text-content')).toBeInTheDocument()
})
