import React from 'react'
import Search from 'views/pages/Search'
import { Route, Link } from 'react-router-dom'

class HomePage extends React.Component {
  state = {}

  handleClick = () => {
    <Route path="/busca" component={Search} />
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/busca" >
          <button className="btn btn-secondary">Search</button>
        </Link>

      </div>
    )
  }
}


export default HomePage
