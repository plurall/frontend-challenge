import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react'
import InputSearch from '.'

describe('<InputSearch>', () => {
  it('Should be render value equals "John"', () => {
    render(
      <InputSearch
        id="input-test"
        name="input-test"
        label="Search"
        onChange={() => {}}
        value="John"
        placeholder='Input test'
      />
    )

    const input = screen.getByLabelText("Search")
    expect(input).toHaveAttribute("value", "John")
  })

  it('Should be change value from "John" to "Mary"', () => {
    render(
      <InputSearch
        id="input-test"
        name="input-test"
        label="Search"
        onChange={() => {}}
        value="John"
        placeholder='Input test'
      />
    )

    const input = screen.getByLabelText("Search")
    expect(input).toHaveAttribute("value", "John")
    fireEvent.change(input, {target: {value: "Mary"}})
    expect(input).toHaveAttribute("value", "Mary")
  })
})
