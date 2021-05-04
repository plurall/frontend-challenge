import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'

class Search extends React.Component {
  state = {}

  client = new SomosClient()

  componentDidMount() {
    // this.client.searchArtists('bob');
  }

  render() {
    return (
      <React.Fragment>
        <SubHeader breadcrumb={[{ text: 'Home' }]} heading="Artist" />
        <div>
          <h2>{this.props.match.params.id}</h2>
        </div>
      </React.Fragment>
    )
  }
}

export default Search
