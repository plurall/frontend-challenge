import React from 'react'
import { render } from '@testing-library/react'
import Busca from 'views/Busca/Busca'

const mockedDomLink = jest.fn(({ to, children }) => <a href={to}>{children}</a>)

jest.mock('react-router-dom', () => ({
  Link: () => mockedDomLink,
}))

describe('Search artists page', () => {
  it('should have an input to user search artists', async () => {
    const { getByPlaceholderText } = render(<Busca />)

    expect(getByPlaceholderText('Pesquise seu artista')).not.toBe(undefined)
  })
})
