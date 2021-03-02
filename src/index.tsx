import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import 'react-app-polyfill/ie9'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
