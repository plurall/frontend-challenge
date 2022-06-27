import React from 'react'
import Search from 'views/pages/Search'
import { Route, Link } from 'react-router-dom'

import styles from './HomePage.module.css'

class HomePage extends React.Component {
  state = {}

  handleClick = () => {
    <Route path="/busca" component={Search} />
  }
  render() {
    return (
      <div>
        <h1 className={styles.titulo}>Home</h1>
        <Link to="/busca" className={styles.link}>
          <button className={styles.button}>Buscar</button>
        </Link>

      </div>
    )
  }
}


export default HomePage
