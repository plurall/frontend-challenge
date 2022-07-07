import React, { useState, useEffect } from 'react'

import { SubHeader, ArtistsList } from 'components'
import { SpotifyService } from 'services'

import styles from './Search.module.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [artists, setArtists] = useState([])

  useEffect(() => {
    async function checkNewArtists() {
      if (searchTerm.length > 4) {
        try {
          const search = await SpotifyService.getArtists(searchTerm)
          setArtists(search.artists.items)
        } catch (error) {
          console.log(error)
        }
      }
    }

    checkNewArtists()
  }, [searchTerm])

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)
  }

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
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />

        <ArtistsList artists={artists} />
      </div>
    </>
  )
}

export default Search
