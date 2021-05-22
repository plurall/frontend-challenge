import React from 'react'

import { SubHeader, SearchBar } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <h1>Hi</h1>
          <SearchBar />
        </div>
      </React.Fragment>
    )
  }
}

export default Home
