import React from 'react'
import TestRenderer from 'react-test-renderer'
import SearchBox from './SearchBox'

let props
let testRenderer
let instance

describe('SearchBox', () => {
  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      placeholder: 'buscar',
      suggestions: [],
      showArtist: jest.fn(),
    }

    testRenderer = TestRenderer.create(
      <SearchBox {...props} />,
    )
    instance = testRenderer.getInstance()
  })

  it('should change inputClicked state when handleOnFocus is called', () => {
    // when
    instance.handleOnFocus()
    // when
    expect(instance.state.inputClicked).toBeTruthy()
  })

  it('should change inputClicked state when handleOnBlur is called', () => {
    // when
    instance.handleOnBlur()
    // then
    expect(instance.state.inputClicked).toBeFalsy()
  })

  it('should change value state when handleChange is called', () => {
    // given
    const event = { target: { value: 'test' } }
    // when
    instance.handleChange(event)
    // then
    expect(instance.state.value).toEqual(event.target.value)
  })

  it('should dispatch showArtist when handleClick is called', () => {
    // given
    const id = 1
    // when
    instance.handleClick(id)(null)
    // then
    expect(props.showArtist).toBeCalledWith(id)
  })
})
