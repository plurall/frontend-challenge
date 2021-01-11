import React from 'react'
import { Link } from '@reach/router'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import { Button } from 'plurall-button'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home', href: '/' }]}
          heading="Olá! Seja bem vindo a aplicação do desafio de front-end da Plurall."
        />
        <div className={styles.wrapper}>
          <h1>Você quer buscar um artista para escutar?</h1>
          <p>Vamos buscar a próxima música que você irá escutar!</p>
          <Link to="/busca">
            <Button type="default">
                Buscar
            </Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
