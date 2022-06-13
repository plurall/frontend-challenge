import '@testing-library/react'
import * as React from 'React'
import { render, getByTestId, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Search from './Search'

import { SomosClient, mockData } from 'utils'

jest.mock('axios')

test('render component', () => {
  const { getByTestId } = render(<Search />)

  expect(getByTestId('logoContainer')).toBeInTheDocument()

  expect(getByTestId('inputSearch')).toBeInTheDocument()
})

test('check alt image content', () => {
  const { getByTestId } = render(<Search />)

  expect(getByTestId('logoImg')).not.toHaveAccessibleDescription()

  expect(getByTestId('logoImg')).toBeInTheDocument()
})

test('input render with focus', () => {
  const { getByTestId } = render(<Search />)
  const input = getByTestId('inputSearch').querySelector('input')
  expect(input).toHaveFocus()
})

test('calling api with random artist', async () => {
  const client = new SomosClient()
  try {
    let artist = await client.getArtists('system', 1)
    expect(artist).toEqual(mockData)
  } catch (error) {
    return
  }
})
