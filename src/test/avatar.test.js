import React from 'react'
import { render } from '@testing-library/react'
import Avatar from '../components/Avatar'

const images = ['image', 'image2']

test('Testing Avatar', () => {
  const { container } = render(
    <Avatar images={images} name={'image1'}/>
  )
  expect(container.firstChild.nodeName).toBe("IMG")
  expect(container.ATTRIBUTE_NODE).toBe(2)
})

