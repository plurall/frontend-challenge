import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Card } from 'components'
import { render, screen, within } from 'tests'

describe('Tests for Card component', () => {
  it('should be able to has link element', () => {
    const mock = {
      id: '04gDigrS5kc9YWfZHwBETP',
      name: 'Maroon 5',
      image: 'https://i.scdn.co/image/ab6761610000f178e250c4af168f67f21dd604b2',
      genres: ['pop', 'pop rock'],
    }

    render(
      <BrowserRouter>
        <Card
          id={mock.id}
          name={mock.name}
          image={mock.image}
          genres={mock.genres}
        />
      </BrowserRouter>,
    )

    const linkElement = screen.getByRole('link',
      {
        name: /name of artist genres musical of artist album of artist maroon 5/i,
      },
    )

    expect(linkElement).toBeInTheDocument()
  })

  it('should be able to has img element', () => {
    const mock = {
      id: '04gDigrS5kc9YWfZHwBETP',
      name: 'Maroon 5',
      image: 'https://i.scdn.co/image/ab6761610000f178e250c4af168f67f21dd604b2',
      genres: ['pop', 'pop rock'],
    }

    render(
      <BrowserRouter>
        <Card
          id={mock.id}
          name={mock.name}
          image={mock.image}
          genres={mock.genres}
        />
      </BrowserRouter>,
    )

    const imgElement = screen.getByRole('img',
      {
        name: /album of artist maroon 5/i,
      },
    )

    expect(imgElement).toBeInTheDocument()
  })

  it('should be able to has heading element', () => {
    const mock = {
      id: '04gDigrS5kc9YWfZHwBETP',
      name: 'Maroon 5',
      image: 'https://i.scdn.co/image/ab6761610000f178e250c4af168f67f21dd604b2',
      genres: ['pop', 'pop rock'],
    }

    render(
      <BrowserRouter>
        <Card
          id={mock.id}
          name={mock.name}
          image={mock.image}
          genres={mock.genres}
        />
      </BrowserRouter>,
    )

    const link = screen.getByRole(
      'link',
      {
        name: /name of artist genres musical of artist album of artist maroon 5/i,
      },
    )

    const nameHeading = within(link).getByRole('heading', {
      name: /name of artist/i,
    })
    const genreHeading = within(link).getByRole('heading', {
      name: /genres musical of artist/i,
    })

    expect(nameHeading).toBeInTheDocument()
    expect(genreHeading).toBeInTheDocument()
  })
})
