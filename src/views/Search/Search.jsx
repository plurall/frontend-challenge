import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {}

  client = new SomosClient()

  componentDidMount() {
    // this.client.searchArtists('bob');
  }

  render() {
    return (
      <React.Fragment>
        <SubHeader breadcrumb={[{ text: 'Home' }]} heading="Busca" />
        <div className={styles.wrapper}>
          <h1>Hi</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Search
