import React from 'react'
import { render, screen } from '@testing-library/react'

import Card from './Card'

describe('Card.jsx', () => {
  test(`Given that the component has rendered
    and received children and props alt and img,
    should render this informations`, () => {
    const singer = 'Péricles'
    const img =
      'https://i.scdn.co/image/ab67616d00001e0220d711e24ec947c793012af5'
    const alt = 'Capa do album Tô Achando Que É Amor'

    render(
      <Card img={img} alt={alt}>
        {singer}
      </Card>,
    )

    expect(screen.getByAltText(alt)).toBeVisible()
    expect(screen.getByText(singer)).toBeVisible()
  })

  test(`Given that the component has rendered
	and not received the alt and img props,
	should not render the card container.`, () => {
    render(<Card />)

    expect(screen.queryByTestId('card')).not.toBeInTheDocument()
  })
})
