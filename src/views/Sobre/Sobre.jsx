import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Sobre.module.css'

class Sobre extends React.Component {
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
          <h1>Sobre</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Sobre
