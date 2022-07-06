import React, { useState, useEffect } from 'react'

import { SubHeader, ArtistsList } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.scss'

const Search = () => {
  const [client, setClient] = useState()

  console.log(client)

  useEffect(() => {
    const newClient = new SomosClient()
    setClient(newClient)
  }, [])

  return (
    <>
      <SubHeader
        breadcrumb={[
          { text: 'Home', href: '/' },
        ]}
        heading="Desafio Front-end do Plurall"
      />
      <div className={styles.wrapper}>
        <h1>Busca de Artistas</h1>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Digite o nome do artista desejado"
        />
        <ArtistsList />
      </div>
    </>
  )
}

export default Search
