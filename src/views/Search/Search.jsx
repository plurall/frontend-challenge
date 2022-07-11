import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { SubHeader, ArtistsList } from 'components'
import { SpotifyService } from 'services'

import styles from './Search.module.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [artists, setArtists] = useState([])

  const history = useHistory()

  const getNewArtists = useCallback(async () => {
    try {
      const search = await SpotifyService.getArtists(searchTerm)
      setArtists(search.artists.items)
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error)
      history.push('/')
    }
  }, [searchTerm, history])

  useEffect(() => {
    if (searchTerm.length > 4) {
      getNewArtists()
    }
  }, [searchTerm, getNewArtists])

  function handleButtonSearch() {
    if (searchTerm.length) {
      getNewArtists()
    }
  }

  return (
    <>
      <SubHeader
        breadcrumb={[
          { text: 'Home', href: '/' },
        ]}
        heading="Desafio Front-end do Plurall"
      />
      <section className={styles.wrapper}>
        <h1>Busca de Artistas</h1>

        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Digite o nome do artista desejado"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button onClick={handleButtonSearch}>
            Buscar
          </button>
        </div>

        <ArtistsList artists={artists} />
      </section>
    </>
  )
}

export default Search
