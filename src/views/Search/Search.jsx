import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Layout } from 'components'

import styles from './Search.module.css'

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', artists: []};
    this.client = new SomosClient()

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({value: event.target.value});

    if (this.state.value.length > 3) {
      this.client.getArtists()
    }
  }

  render() {
    let rows = []
    for(let i=0; i<5; i++){
      rows.push(<li>Num: {i}</li>)
    }

    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Search' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <input
            className={styles.forminput}
            placeholder="Busque pelo artista desejado..."
            type="text"
            value={this.state.value}
            onChange={this.handleSearch}
          />
          <ul>
            {rows}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default Search
