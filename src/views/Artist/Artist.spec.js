import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { render, screen } from 'tests'

import Artist from './Artist'

describe('Tests for Artist component', () => {
  it('should be able to has main element', async () => {
    render(
      <BrowserRouter>
        <Artist
          match={{
            params: { id: '04gDigrS5kc9YWfZHwBETP' },
            path: '/artist/:id',
          }}
        />
      </BrowserRouter>,
    )

    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })
})
