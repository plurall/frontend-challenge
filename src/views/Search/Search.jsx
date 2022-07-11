import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { SubHeader, ArtistsList, Spinner } from 'components'
import { SpotifyService } from 'services'

import styles from './Search.module.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [artists, setArtists] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()

  const getNewArtists = useCallback(async () => {
    try {
      setIsLoading(true)
      const search = await SpotifyService.getArtists(searchTerm)
      setArtists(search.artists.items)
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error)
      history.push('/')
    } finally {
      setIsLoading(false)
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

        {isLoading && <Spinner />}
        {!isLoading && <ArtistsList artists={artists} />}
      </section>
    </>
  )
}

export default Search
