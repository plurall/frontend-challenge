import React from 'react'
import { Link } from 'react-router-dom'
import { SomosClient } from '../../utils'
import styles from './HomePage.module.css'

class HomePage extends React.Component {
  state = {}
  client = new SomosClient()

  render() {
    return (
      <>
        <Link to="/search">
          <div className={styles.center}>
            <button>Pesquisar Artista</button>
          </div>
        </Link>
      </>
    )
  }
}

export default HomePage
