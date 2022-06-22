import React from 'react'
import Search from 'views/pages/search'
import { Route } from 'react-router-dom'

class HomePage extends React.Component {
  state = {}

  handleClick = () => {
    <Route path="/busca" component={Search} />
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.handleClick}>Buscar</button>
      </div>
    )
  }
}


export default HomePage
