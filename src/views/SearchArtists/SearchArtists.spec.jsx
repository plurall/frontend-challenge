import React from 'react'
import ReactDOM from 'react-dom'
import { SearchArtists } from './index'

describe('Search Artists', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchArtists />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
