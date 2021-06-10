import React from 'react'

import { render, screen, userEvent } from 'tests'

import Search from './Search'

describe('Tests for Search page', () => {
  it('should be able to has input element', () => {
    render(<Search />)

    const textboxElement = screen.getByRole('textbox', {
      name: /textbox to finding artists/i,
    })

    expect(textboxElement).toBeInTheDocument()
  })

  it('should be able to find artists with four more letters', async () => {
    const artist = 'maroo'
    render(<Search />)

    const textboxElement = screen.getByRole('textbox', {
      name: /textbox to finding artists/i,
    })
    userEvent.type(textboxElement, artist)

    expect(textboxElement).toHaveValue(artist)
  })
})
