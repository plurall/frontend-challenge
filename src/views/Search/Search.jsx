import React from 'react'

import { Layout } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <h1>Search page</h1>
        </div>
      </Layout>
    )
  }
}

export default Search
