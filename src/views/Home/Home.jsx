import React from 'react'
import { Link } from 'react-router-dom'

import { ContentPage, SubHeader } from 'components'
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
          heading="Somos Front-end Challenge"
        />
        <ContentPage>
          <Link to="/busca" aria-label="Link para a página de busca">
            <button className={styles.searchArtistBtn}>BUSCAR ARTISTA</button>
          </Link>
        </ContentPage>
      </React.Fragment>
    )
  }
}

export default Home
