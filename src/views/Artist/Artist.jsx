import React from 'react'

import { Layout } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'

class Artist extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <h1>Artist page</h1>
        </div>
      </Layout>
    )
  }
}

export default Artist
