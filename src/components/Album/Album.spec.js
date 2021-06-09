import React from 'react'

import { render, screen, within } from 'tests'

import Album from './Album'

describe('Tests for Album component', () => {
  it('should be able to has heading element', () => {
    const mock = {
      image: 'https://i.scdn.co/image/ab67616d00004851ae663dbadd673799c01538d8',
      name: 'Red Pill Blues + (Deluxe)',
      releaseDate: '2018-11-21',
    }

    render(<Album
      image={mock.image}
      name={mock.name}
      releaseDate={mock.releaseDate}
    />)

    const listitem = screen.getByRole('listitem', {
      name: /information from album red pill blues \+ \(deluxe\)/i,
    })
    const headingElement = within(listitem).getByRole('heading', {
      name: /name of album/i,
    })

    expect(listitem).toBeInTheDocument()
    expect(headingElement).toBeInTheDocument()
  })

  it('should be able to has content info element', () => {
    const mock = {
      image: 'https://i.scdn.co/image/ab67616d00004851ae663dbadd673799c01538d8',
      name: 'Red Pill Blues + (Deluxe)',
      releaseDate: '2018-11-21',
    }

    render(<Album
      image={mock.image}
      name={mock.name}
      releaseDate={mock.releaseDate}
    />)

    const listitem = screen.getByRole('listitem', {
      name: /information from album red pill blues \+ \(deluxe\)/i,
    })
    const contentInfoElement = within(listitem).getByRole('contentinfo', {
      name: /release date of album/i,
    })

    expect(listitem).toBeInTheDocument()
    expect(contentInfoElement).toBeInTheDocument()
  })

  it('should be able to has img element', () => {
    const mock = {
      image: 'https://i.scdn.co/image/ab67616d00004851ae663dbadd673799c01538d8',
      name: 'Red Pill Blues + (Deluxe)',
      releaseDate: '2018-11-21',
    }

    render(<Album
      image={mock.image}
      name={mock.name}
      releaseDate={mock.releaseDate}
    />)

    const listitem = screen.getByRole('listitem', {
      name: /information from album red pill blues \+ \(deluxe\)/i,
    })
    const imgElement = within(listitem).getByRole('img', {
      name: /album red pill blues \+ \(deluxe\)/i,
    })

    expect(listitem).toBeInTheDocument()
    expect(imgElement).toBeInTheDocument()
  })
})
