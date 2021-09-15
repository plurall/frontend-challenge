import React from 'react'
import { Sidebar } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <h1>Home</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
