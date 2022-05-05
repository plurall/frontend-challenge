import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import { ArtistSearch } from 'views'

import styles from './Home.module.css'
class Home extends React.Component {

  client = new SomosClient();

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Pesquisa de Artista' }]}
          heading="Desafio Front-end do Plurall"
        />
        <div className={styles.wrapper}>

          <ArtistSearch/>

        </div>

      </>
    )
  }
}

export default Home
