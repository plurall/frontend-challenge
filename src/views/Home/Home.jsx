import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.css'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <Link to="/busca" className={styles.searchButton}>
            Buscar Artistas
          </Link>
        </div>
      </>
    )
  }
}

export default Home
