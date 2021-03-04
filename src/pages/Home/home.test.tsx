import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '.'

describe('<Home />', () => {
  it('should have link with correct path', () => {
    render(<MemoryRouter>
      <Home />
    </MemoryRouter>)
    expect(screen.getByRole('link', { name: 'Buscar Artistas' })).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/busca')
  })
})
