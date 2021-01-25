import React from 'react'

import {
  Link,
} from "react-router-dom";

import { SomosClient } from 'utils'

import styles from './Home.module.css'

import Button from 'components/Button'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  componentDidMount() {
    console.log('this.props:', this.props)
  }


  render() {
    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>Home</h1>
          </div>

          <Button route="/busca" text="Buscar Artista" />
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
