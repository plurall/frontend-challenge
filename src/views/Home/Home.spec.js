import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { render, screen, userEvent } from 'tests'
import { Search } from 'views'

import Home from './Home'

describe('Tests for Home page', () => {
  it('should be able to find link element', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )

    const linkElement = screen.getByRole('link',
      { name: /link to search page/i },
    )

    expect(linkElement).toBeInTheDocument()
  })

  it('should be able to find button element', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )

    const buttonElement = screen.getByRole('button', { name: /Find artist/i })

    expect(buttonElement).toBeInTheDocument()
  })

  it('should be able to click button to go Search page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )

    const linkElement = screen.getByRole('link',
      { name: /link to search page/i },
    )
    userEvent.click(linkElement)

    render(<Search />)
    const headingElement = screen.getByRole('img', {
      name: /logo from spotify and plürall/i,
    })

    expect(headingElement).toBeInTheDocument()
  })
})
