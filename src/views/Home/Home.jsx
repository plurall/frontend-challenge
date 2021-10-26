import React from 'react'
import 'animate.css';

import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    const { main } = styles

    return (
      <div className={main}>
        <h1 className={`animate__animated animate__fadeInDown`}>
          Seus <span>artistas favoritos</span> <br /> na ponta dos seus dedos
        </h1>
        <div className={`animate__animated animate__fadeInDown`}>
          <p>Quer experimentar?</p>
          <button>Buscar agora</button>
        </div>
      </div>
    )
  }
}

export default Home
