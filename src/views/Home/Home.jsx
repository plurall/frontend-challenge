/* eslint-disable linebreak-style */
import React from 'react'
import { Button } from 'plurall-ui'
import { SubHeader } from 'components'
import { Link } from 'react-router-dom'

import styles from './Home.module.css'

function Home() {
  return (
    <React.Fragment>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Desafio Front-end do Plurall"
      />
      <div className={styles.wrapper}>
        <Link to="/busca">
          <Button>Buscar agora</Button>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Home
