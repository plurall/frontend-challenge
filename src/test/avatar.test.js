import React from 'react'
import { render } from '@testing-library/react'
import Avatar from '../components/Avatar'

const imagesFaker = [{url: 'imagem Bonny' }, {url: ' img2' }]
const name = 'Gabriel Bonny'

test('Testing Avatar', () => {
  const { container, getByTestId } = render(
    <Avatar images={imagesFaker} name={name}/>
  )
  const nameAvatar = getByTestId('avatar').getAttribute('alt')
  const imgAvatar = getByTestId('avatar').getAttribute('src')
  expect(imgAvatar).toBe("imagem Bonny")
  expect(nameAvatar).toBe(`artista: ${name}`)
  expect(container.firstChild.nodeName).toBe("IMG")
  expect(container.ATTRIBUTE_NODE).toBe(2)
})

