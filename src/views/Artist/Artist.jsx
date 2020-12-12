import React from 'react'

import { Layout } from 'components'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'

class Artist extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Artist' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <h1>Olá</h1>
        </div>
      </Layout>
    )
  }
}

export default Artist
