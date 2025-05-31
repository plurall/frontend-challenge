import React from 'react'
import { Link } from 'react-router-dom'
import { SubHeader, Wrapper } from 'components'
import { SomosClient } from 'utils'
import * as styles from './Home.module.scss'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader breadcrumb={[{ text: 'Home' }]} heading='Desafio Front-end do Plurall' />
        <Wrapper>
          <div className={styles.container}>
            <Link to='/busca' className={styles.searchButton}>
              Buscar Artistas
            </Link>
          </div>
        </Wrapper>
      </>
    )
  }
}

export default Home
