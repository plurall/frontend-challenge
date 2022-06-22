import React from 'react'
import Header from 'views/components/Header'
import Sidebar from 'views/components/Sidebar'
import Content from 'views/components/Content'

class Home extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default Home
