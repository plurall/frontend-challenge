import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import ButtonNavigate from '.';

import arrowLeftSvg from '../../assets/icons/arrow-left.svg'

const image = {
  url: arrowLeftSvg,
  alt: "alt test"
}

describe('<ButtonNavigate>', () => {
  const handleClick = jest.fn()
  it('Should be call function when user press click', () => {
    render(<ButtonNavigate image={image} onClick={handleClick} />)

    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Should be status enable when disabled is null', () => {
    render(<ButtonNavigate image={image} onClick={handleClick} />)

    const button = screen.getByRole("button")
    expect(button).toBeEnabled()
  })

  it('Should be status disabled when disabled is true', () => {
    render(<ButtonNavigate image={image} onClick={handleClick} disabled/>)

    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })

  it('Should be have a image with src="arrow-left.svg and alt="alt test"', () => {
    render(<ButtonNavigate image={image} onClick={handleClick}/>)

    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", image.url)
    expect(img).toHaveAttribute("alt", image.alt)
  })
})
