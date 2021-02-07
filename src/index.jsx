import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'

import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(<Routes />, document.getElementById('root'))

registerServiceWorker()
