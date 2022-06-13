import React from 'react'

import { SubHeader } from 'components'

import { Link } from 'react-router-dom'
import styles from './Home.module.css'

class Home extends React.Component {
  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Desafio Front-end do Plurall"
        />
        <div className={styles.wrapper}>
          <h1>Home da aplicação</h1>
        </div>
        <div className={styles.searchBox}>
          <Link
            data-testid="text-content"
            to="/busca"
            style={{ textDecoration: 'none' }}
          >
            <span>
              Clicando aqui você poderá ir para a página de buscas de seus
              artistas favoritos!
            </span>
          </Link>
        </div>
      </>
    )
  }
}

export default Home
