import React from 'react'
import { Render } from '@react-testing-library'
import { Layout } from 'components'

test('renders learn react link', () => {
  const { getByText } = Render(<Layout />)
  const linkElement = getByText(/search music/i)
  expect(linkElement).toBeInTheDocument()
})
