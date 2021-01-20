import React from 'react'
import ReactDOM from 'react-dom'
import Artist from './Artist'

it('Should render component without errors passing id' , () => {
  const div = document.createElement('div')
  ReactDOM.render(<Artist id={1}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})