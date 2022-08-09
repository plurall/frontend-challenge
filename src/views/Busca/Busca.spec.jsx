import React from 'react'
import { render } from '@testing-library/react'
import Busca from './Busca'

it('check if link exist', () => {
  const { getByPlaceholderText } = render(<Busca />)
  const input = getByPlaceholderText('Digite qual artista deseja buscar')
  expect(input).toBeTruthy()
})
