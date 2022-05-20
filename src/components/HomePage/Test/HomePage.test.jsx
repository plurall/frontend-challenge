import { fireEvent, render, screen } from '@testing-library/react'
import HomePage from './'

test('test button and name  button', () => {
  render(<HomePage />)
  const button = screen.getByRole('button')
  fireEvent.click(button)

  const buttonText = screen.queryByText('Pesquisar Artista')
  expect(buttonText).toBeInTheDocument()
})
