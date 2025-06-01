import { render, screen, fireEvent } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('<SearchInput />', () => {
  test('should render input with initial value and correct placeholder', () => {
    render(<SearchInput value='beatles' changeValue={jest.fn()} />)

    const input = screen.getByRole('textbox', { name: /buscar artista/i })

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('beatles')
    expect(input).toHaveAttribute('placeholder', 'Buscar artista...')
  })

  test('should call changeValue when user types in input', () => {
    const mockChangeValue = jest.fn()
    render(<SearchInput value='' changeValue={mockChangeValue} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'queen' } })

    expect(mockChangeValue).toHaveBeenCalledTimes(1)
    expect(mockChangeValue).toHaveBeenCalledWith('queen')
  })

  test('should render custom label when passed as prop', () => {
    const customLabel = 'Search band'
    render(<SearchInput value='' changeValue={jest.fn()} label={customLabel} />)

    const input = screen.getByRole('textbox', { name: customLabel })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', customLabel + '...')
  })
})
