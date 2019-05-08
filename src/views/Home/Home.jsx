import React from 'react'

import { SubHeader, ButtonLink } from 'components'
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
          heading="Somos Front-end Challenge"
        />
        <div className={styles.wrapper}>
          <h1>Hi, click <ButtonLink>here</ButtonLink> and search your favorite artists.</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
