import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import ButtonNavigate from '.';

import arrowLeftSvg from '../../assets/icons/arrow-left.svg'

const image = {
  url: arrowLeftSvg,
  alt: "seta para esquerda"
}

describe('<ButtonNavigate>', () => {
  it('Should be call function when user press click', () => {
    const handleClick = jest.fn()
    render(<ButtonNavigate image={image} onClick={handleClick} />)

    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Should be status enable when disabled is null', () => {
    const handleClick = jest.fn()
    render(<ButtonNavigate image={image} onClick={handleClick} />)

    const button = screen.getByRole("button")
    expect(button).toBeEnabled()
  })

  it('Should be status disabled when disabled is true', () => {
    const handleClick = jest.fn()
    render(<ButtonNavigate image={image} onClick={handleClick} disabled/>)

    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })
})
