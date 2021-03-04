import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SearchArtists from '.'

describe('<SearchArtists />', () => {
  it('should have search input', () => {
    render(<MemoryRouter>
      <SearchArtists />
    </MemoryRouter>)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toHaveAttribute('placeholder', 'Busque um artista')
  })
})
