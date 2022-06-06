import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ArtistDetail from '.'

describe('<ArtistDetail/>', () => {
  it('Should be render text "Back"', () => {
    render(<ArtistDetail />)

    const back = screen.getByText("Back")
    expect(back).toBeInTheDocument()
  })
})
