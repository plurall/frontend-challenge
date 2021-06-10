import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import logo from 'assets/plurall.jpeg'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="plürall Front-end Challenge"
        />
        <div className={styles.wrapper}>
          <img
            src={logo}
            alt="Logotipo plürall"
            aria-label="Welcome to plürall"
            decoding="async"
            loading="lazy"
          />

          <Link to="/search" aria-label="Link to search page">
            <button
              type="button"
              aria-label="Find artist"
              className={styles.buttonPrimary}
            >
              Buscar Artista
            </button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
