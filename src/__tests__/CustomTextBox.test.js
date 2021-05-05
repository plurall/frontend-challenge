import React from 'react'
import { shallow } from 'enzyme'
import { CustomTextBox } from 'components'
import { Alert, TextBox } from 'plurall-ui'

describe('Test for CustomTextBox', () => {
  test('should render correctly', () => {
    const props = {
      disabled: false,
      errorMessage: 'error message',
      placeholder: 'placeholder',
    }

    const wrapper = shallow(<CustomTextBox {...props} />)

    const textBox = wrapper.find(TextBox)
    const alertC = wrapper.find(Alert)

    const message = 'error message'
    const placeholder = 'placeholder'

    expect(textBox.exists()).toBe(true)
    expect(textBox.prop('placeholder')).toBe(placeholder)
    expect(alertC.exists()).toBe(true)
    expect(alertC.children().text()).toBe(message)
  })

  test('should not render the alert message', () => {
    const props = {
      disabled: false,
      placeholder: 'test',
    }

    const wrapper = shallow(<CustomTextBox {...props} />)

    const alertC = wrapper.find(Alert)
    expect(alertC.exists()).toBe(false)
  })

  test('the prop name of the Alert is Error', () => {
    const props = {
      disabled: false,
      placeholder: 'test',
      errorMessage: 'error test error'
    }

    const wrapper = shallow(<CustomTextBox {...props} />)

    const alertC = wrapper.find(Alert)
    expect(alertC.prop('name')).toBe('Error')
  })
})
