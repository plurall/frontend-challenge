import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import InputSearch from '.'

describe('<InputSearch>', () => {
  it('Should be render value equals "John"', () => {
    render(
      <InputSearch
        id="input-test"
        name="input-test"
        label="Search"
        onChange={() => {}}
        value="John"
        placeholder='Input test'
      />
    )
  })
})
