import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import GenreMusic from '.'

describe('<GenreMusic/>', () => {
  it('Should be render text "Genre Music"', () => {
    render(<GenreMusic genre='Genre Music'/>)

    const genreMusic = screen.getByText("Genre Music")
    expect(genreMusic).toBeInTheDocument()
  })
})
