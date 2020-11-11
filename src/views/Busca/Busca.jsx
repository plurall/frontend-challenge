import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Busca.module.css'

class Busca extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading="Busque por um artista"
        />
        <div className={styles.wrapper}>
          <input type="text" />
        </div>
      </React.Fragment>
    )
  }
}

export default Busca
