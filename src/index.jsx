import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'registerServiceWorker'

import App from 'App'

ReactDOM.render(
  <App></App>,
  document.getElementById('root'),
)

registerServiceWorker()
