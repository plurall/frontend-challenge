import React from 'react'

import { SubHeader, SearchCards } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends React.Component {
  state = { url: 'https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw' }

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Search' }]}
          heading=""
          profile={{ url: this.state.url }}
        />
        <div className={styles.wrapper}>
          <h1>Busca</h1>


          <SearchCards />
        </div>

      </>
    )
  }
}

export default Search
