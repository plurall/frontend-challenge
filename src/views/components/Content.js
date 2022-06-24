import React from 'react'
import { Route } from 'react-router-dom'
import Artist from 'views/pages/artist'
import Search from 'views/pages/Search'
import HomePage from 'views/pages/homePage'

class Content extends React.Component {
  state = {}

  render() {
    return (
      <main className="Content">
        {/* <h1>Conteúdo</h1> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/busca" component={Search} />
        <Route path="/artista/:id" component={Artist} />
      </main>
    )
  }
}

export default Content
