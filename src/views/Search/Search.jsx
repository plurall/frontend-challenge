import React, { useState } from 'react'
import { SubHeader, SearchBar, ListArtist } from 'components'
import { SomosClient } from 'utils'
import styles from './Search.module.css'

const Search = () => {
  const api = new SomosClient()
  const [artists, setArtists] = useState([])

  const searchArtistsApi = async event => {
    const response = await api.getArtists(event)
    if (!response.artists) return
    setArtists(response.artists.items)
  }

  const searchArtist = name => {
    searchArtistsApi(name)
  }

  return (
    <>
      <SubHeader
        buttonHref="/"
        breadcrumb={[{ text: 'Busca' }]}
        heading="Buscar artistas | Spotify"
      />
      <div className={styles.wrapper}>
        <SearchBar searchArtist={searchArtist} />
        <ListArtist artists={artists} />
      </div>
    </>
  )
}

export default Search
