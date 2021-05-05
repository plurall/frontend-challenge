import React from 'react'
import { shallow } from 'enzyme'
import { PaginationButtons } from 'components'
import { Button } from 'plurall-ui'

describe('Test for Pagination Buttons', () => {
  test('should display the buttons texts correctly', () => {
    const wrapper = shallow(<PaginationButtons />)

    const buttons = wrapper.find(Button)
    const prevButton = buttons.find('[id="prev"]')
    const nextButton = buttons.find('[id="next"]')

    const previousLabel = 'Anterior'
    const nextLabel = 'Próxima'

    expect(buttons.length).toBe(2)
    expect(prevButton.children().text()).toBe(previousLabel)
    expect(nextButton.children().text()).toBe(nextLabel)
  })
})
