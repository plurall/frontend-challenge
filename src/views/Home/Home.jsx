import { Link } from 'react-router-dom'
import { Button, Heading } from '@plurall/elo'
import React from 'react'

import { SubHeader } from 'components'
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
        />
        <div className={styles.wrapper}>
          <Heading>Home page - Frontend Challenge</Heading>
          <div
            className={styles.buttonWrapper}
          >
            <Button>
              <Link to="/search" className={styles.link}>
                Go to Search Page
              </Link>
            </Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
