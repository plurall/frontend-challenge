import React from 'react'
import { Link } from 'react-router-dom'
import { SomosClient } from 'utils'
import { SubHeader } from 'components'
import { Button } from 'plurall-ui'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Desafio Front-end do Plurall"
        />
        <div className={styles.wrapper}>
          <Link to="/busca">
            <Button>Buscar agora</Button>
          </Link>
        </div>
      </>
    )
  }
}

export default Home
