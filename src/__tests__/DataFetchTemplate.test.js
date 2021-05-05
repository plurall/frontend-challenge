import React from 'react'
import { shallow } from 'enzyme'
import { DataFetchTemplate, Spinner } from 'components'
import { Button } from 'plurall-ui'

describe('Test for Data Fetch Template', () => {
  test('if is loading should render the spinner', () => {
    const props = {
      data: null,
      isLoading: true,
      hasError: false,
    }

    const wrapper = shallow(<DataFetchTemplate {...props} />)

    const spinner = wrapper.find(Spinner)
    const h2 = wrapper.find('h2')
    const button = wrapper.find(Button)

    expect(spinner.exists()).toBe(true)
    expect(h2.exists()).toBe(false)
    expect(button.exists()).toBe(false)
  })

  test('if has error should render message and button', () => {
    const props = {
      data: null,
      isLoading: false,
      hasError: true,
    }

    const wrapper = shallow(<DataFetchTemplate {...props} />)

    const spinner = wrapper.find(Spinner)
    const h2 = wrapper.find('h2')
    const button = wrapper.find(Button)

    const error = "Erro ao carregar página"
    const buttonText = "Ir para busca"

    expect(spinner.exists()).toBe(false)
    expect(h2.exists()).toBe(true)
    expect(h2.children().text()).toBe(error)
    expect(button.exists()).toBe(true)
    expect(button.children().text()).toBe(buttonText)
  })

  test('if data exists should render the children correctly', () => {
    const props = {
      data: { id: 2 },
      isLoading: false,
      hasError: false,
    }

    const wrapper = shallow(<DataFetchTemplate {...props} ><div id="children">hello world rsrs</div></DataFetchTemplate>)

    const spinner = wrapper.find(Spinner)
    const h2 = wrapper.find('h2')
    const button = wrapper.find(Button)
    const children = wrapper.find('div').find('[id="children"]');

    expect(spinner.exists()).toBe(false)
    expect(h2.exists()).toBe(false)
    expect(button.exists()).toBe(false)
    expect(children.children().text()).toBe('hello world rsrs')
    expect(children.length).toBe(1)
  })
})
