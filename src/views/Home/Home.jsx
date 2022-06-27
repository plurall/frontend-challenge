import React from 'react'
import Header from 'views/components/Header'
import Content from 'views/components/Content'

class Home extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default Home
