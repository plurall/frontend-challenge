import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h1 className={styles.logo}><strong>SOMOS</strong> Player</h1>
              <h2>Seja bem vindo ao SOMOS Player</h2>
              <button className={styles.center}>
                <Link to="/busca">
                  Buscar artistas
                </Link>
              </button>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Home
