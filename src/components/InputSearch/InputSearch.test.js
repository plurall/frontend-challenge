import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputSearch from './InputSearch'

describe('InputSearch.jsx', () => {
  test(`Given that the component was rendered
    and the user types in the input,
    should call action passed by prop, sending the input value as argument`, () => {
    const mockFunc = jest.fn()
    const placeholder = 'Digite o nome do artista'
    const value = 'Péricl'

    render(<InputSearch action={mockFunc} placeholder={placeholder} />)

    const input = screen.getByPlaceholderText(placeholder)
    userEvent.type(input, value)

    expect(mockFunc).toHaveBeenCalledTimes(6)
    expect(mockFunc).toHaveBeenCalledWith('Péricl')
  })
})
