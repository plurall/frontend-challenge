import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

it('check if link exist', () => {
  const { getByText } = render(<Home />)
  const link = getByText('Ir para a busca')
  expect(link).toBeTruthy()
})
