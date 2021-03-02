import React from 'react'
import { render } from '@testing-library/react'
import Album from '../components/Album'


const albumsFaker = [
  {
    id: 1,
    name: 'Gabriel Boni',
    release_date: '2020-09-27',
    images: [{url: 'imagem Bonny' }, {url: ' img2' }]
  }
]

test('Testing Albun', () => {
  const { getByTestId } = render(
    <Album albums={albumsFaker}/>,
  )
  const alt = getByTestId('img').getAttribute('alt')
  const img = getByTestId('img').getAttribute('src')
  expect(img).toBe('imagem Bonny')
  expect(alt).toBe('Gabriel Boni')
  expect(getByTestId('name').textContent).toBe('Gabriel Boni')
  expect(getByTestId('data').textContent).toBe("26/09/2020")

})


