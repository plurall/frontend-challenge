import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputSearch from './InputSearch'

describe('InputSearch.jsx', () => {
  test(`Given that the component was rendered
    and the user type most than 4 caracters on input,
    should call action passed per prop, sending the input value as argument`, () => {
    const mockFunc = jest.fn()
    const placeholder = 'Digite o nome do artista'
    const value = 'Péric'

    render(<InputSearch action={mockFunc} placeholder={placeholder} />)

    const input = screen.getByPlaceholderText(placeholder)
    userEvent.type(input, value)

    expect(mockFunc).toHaveBeenCalledTimes(2)
    expect(mockFunc).toHaveBeenCalledWith('Péric')
  })

  test(`Given that the component was rendered
  and the user type less than 4 caracters on input,
  should not call action passed per prop.`, () => {
    const mockFunc = jest.fn()
    const placeholder = 'Digite o nome do artista'

    render(<InputSearch action={mockFunc} placeholder={placeholder} />)

    const input = screen.getByPlaceholderText(placeholder)
    userEvent.type(input, 'Pé')

    expect(mockFunc).toHaveBeenCalledTimes(0)
  })
})
