import React from 'react'
import { render } from '@testing-library/react'
import Conditional from '../components/Conditional'


test('Testing Conditional true', () => {
  const { container } = render(
    <Conditional condition={true} truthy={<div>"Conditional true"</div>} lie={<div>"Conditional false"</div>} />,
  )
  expect(container.firstChild.nodeName).toBe('DIV')
  expect(container.innerHTML).toBe("<div>\"Conditional true\"</div>")
})

test('Testing Conditional false', () => {
  const { container } = render(
    <Conditional condition={false} truthy={<div>"Conditional true"</div>} lie={<div>"Conditional false"</div>} />,
  )
  expect(container.firstChild.nodeName).toBe('DIV')
  expect(container.innerHTML).toBe("<div>\"Conditional false\"</div>")
})
