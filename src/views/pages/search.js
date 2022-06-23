import React from 'react'
import { SomosClient } from 'utils'

class Search extends React.Component {
  state = {}

  render() {
    const client = new SomosClient()
    return (
      <div>
        <h1>Search</h1>
        <label htmlFor="buscar">
          <input id="buscar" className="" type="input" placeholder="Artistas, músicas ou podcasts" />
          <button className="btn btn-secondary btn-sm" >Buscar</button>
          <h1>{client}</h1>
        </label>
      </div>
    )
  }
}

export default Search
