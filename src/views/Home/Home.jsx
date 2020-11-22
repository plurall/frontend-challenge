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
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
          <div className={styles.wrapper}>
            <h1>Hi</h1>
            <button>
              <Link to="/busca">
                Buscar
              </Link>
            </button>
          </div>
      </React.Fragment>
    )
  }
}

export default Home
