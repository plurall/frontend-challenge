import React from 'react'

import { SubHeader, Button } from 'components'
import { SomosClient } from 'utils'
import { SEARCH } from 'routes';

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
          <Button
            text={'Encontrar Artista'}
            href={SEARCH}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Home
