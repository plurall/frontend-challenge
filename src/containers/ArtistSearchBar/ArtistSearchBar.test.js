import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ArtistSearchBar from '.'

describe("Layout Component", () => {
  test("Deve conter o empty state 'Busque o artista que deseja encontrar'", () => {
    render(<ArtistSearchBar artistName="derek" handleChange={() => {}} />)
    
    const emptyState = screen.getByText("Descubra SEU artista")

    expect(emptyState).toBeInTheDocument()
  })
})