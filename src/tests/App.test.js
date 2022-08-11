import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from 'views'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

it('should check if there is button in Home page', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )

  const button = await screen.findByRole('link')

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent("Pesquisar artista")
})