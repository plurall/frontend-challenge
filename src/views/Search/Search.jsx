import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {}

  client = new SomosClient()

  submit = (event) => {
    this.client.getArtists()
  }
  
  //Quando for digitado uma palavra com no minimo 4 chars, buscar por artista
  handleSearchChange = (event) => {
    const param = event.target.value;
    if (event.target.value.length >= 4) {
      this.client.getArtists(param);
    }
  };

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Search' }]}
          heading="Somos Front-end Challange"
        />
        <Router>
          <div className={styles.wrapper}>
            <h1>XXXXXXXXXX</h1>
            <input 
              type="text"
              id="search-input"
              placeholder="Buscar artista..."
              onChange={this.handleSearchChange}
            ></input>
            <button onClick={this.submit}>
              Teste
            </button>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default Search
