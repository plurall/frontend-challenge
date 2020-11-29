import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
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
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <Link to="busca">
            <Button variant="contained" color="primary">
              Ir para a página de busca
            </Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
