import React from 'react'

// import { Layout } from 'components'
import { Home } from 'views'
// import Content from './views/pages/components/Content'
// import Sidebar from './views/pages/components/Sidebar'
// import './views.Home.module.?css'

import './App.module.css'

class App extends React.Component {
  state = {}
  render() {
    return (
      // <Layout>
      <div>
        <Home />
        {/* <Content />
        <Sidebar /> */}
      </div>
      // </Layout>
    )
  }
}

export default App
