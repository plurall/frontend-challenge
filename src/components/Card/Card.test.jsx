import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Card } from 'components';
import { BrowserRouter } from 'react-router-dom';

describe('Card component', () => {
  const artistProps = {
    id: 123,
    name: "Artist Mock",
    image: "images/default-icon.png"
  }

  const albumProps = {
    id: 123,
    name: "Album Mock",
    image: "images/default-icon.png",
    date: "01/01/2021"
  }
  
  it('renders correctly', () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <Card element={artistProps} />
      </BrowserRouter>
    )

    expect(getByText(artistProps.name)).toBeInTheDocument()
    expect(getByRole('img')).toHaveAttribute('src', artistProps.image)
  })

  it('renders with according styles', () => {
    const artistCard = render(
      <BrowserRouter>
        <Card element={artistProps} />
      </BrowserRouter>
    )

    const albumCard = render(
      <BrowserRouter>
        <Card element={albumProps} />
      </BrowserRouter>
    )

    expect(screen.getAllByRole('img')[0].classList.contains('artistImg')).toBe(true)
    expect(screen.getAllByRole('img')[1].classList.contains('albumImg')).toBe(true)
  })
})