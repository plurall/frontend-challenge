import React from 'react'
import { render } from '@testing-library/react'
import Album from '../components/Album'


const albums = [
  {
    id: 1,
    name: 'Gabriel Boni',
    release_date: '20/12/2021',
    images: [{url: 'imagem Bonny' }, {url: ' img2' }]
  }
]

test('Testing Albun', () => {
  const {getByTestId } = render(
    <Album albums={albums}/>,
  )
  const alt = getByTestId('img').getAttribute('alt')
  const img = getByTestId('img').getAttribute('src')
  expect(img).toBe('imagem Bonny')
  expect(alt).toBe('Gabriel Boni')
  expect(getByTestId('name').textContent).toBe('Gabriel Boni')
  expect(getByTestId('data').textContent).toBe('20/12/2021')

})


