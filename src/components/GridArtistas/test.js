import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'

import GridArtistas from './GridArtistas'

afterEach(cleanup)

test('renders "Nenhum resultado encontrado" when there are no artists', () => {
  const { getByText } = render(<GridArtistas />)
  expect(getByText(/nenhum resultado encontrado/i)).toBeInTheDocument()
})

test('renders artists', () => {
  const fakeArtists = [{ id: 1, name: 'Queen' }, { id: 2, name: 'The Beatles' }]
  const { getAllByTestId } = render(
    <BrowserRouter>
      <GridArtistas data={fakeArtists} />
    </BrowserRouter>,
  )
  const artistNames = getAllByTestId('artist-id').map(li => li.textContent)
  expect(artistNames).toMatchInlineSnapshot(`
Array [
  "Queen",
  "The Beatles",
]
`)
})
