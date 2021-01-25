import React from 'react'

import { SomosClient } from 'utils'

import styles from './PageNotFound.module.css'

import Button from 'components/Button'

class PageNotFound extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <h1>404 - Página não encontrada</h1>
          <Button route="/" text="Voltar" />
        </div>
      </React.Fragment>
    )
  }
}

export default PageNotFound
