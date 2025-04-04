import React, { useState, useEffect, useCallback } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'

import { SubHeader, SkeletonCard } from 'components'
import { SomosClient } from 'utils'
import { useSearch } from 'utils/SearchContext'

import styles from './Busca.module.scss'

const BASE_URL = '/'

const DEBOUNCE_DELAY = 500

const useDebounce = (fn, delay) => {
  const [timer, setTimer] = useState(null)

  const debouncedFn = useCallback((...args) => {
    if (timer) {
      clearTimeout(timer)
    }

    const newTimer = setTimeout(() => {
      fn(...args)
    }, delay)

    setTimer(newTimer)
  }, [fn, delay, timer])

  useEffect(() => () => {
      if (timer) {
        clearTimeout(timer)
      }
    }, [timer])

  return debouncedFn
}

const useQuery = () => new URLSearchParams(useLocation().search)

const Busca = () => {
  const urlQuery = useQuery()
  const location = useLocation()
  const history = useHistory()
  const savedQuery = urlQuery.get('q') || ''

  const { searchTerm, setSearchTerm, artists, setArtists } = useSearch()

  const [loading, setLoading] = useState(false)
  const [client] = useState(() => new SomosClient())

  useEffect(() => {
    if (savedQuery && savedQuery !== searchTerm) {
      setSearchTerm(savedQuery)
    }
  }, [])

  const searchArtists = async (value) => {
    if (value.length >= 4) {
      setLoading(true)
      try {
        const data = await client.searchArtists(value)
        setArtists(data.artists.items)
      } catch (error) {
        console.error('Erro ao buscar artistas:', error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 300)
      }
    } else {
      setArtists([])
    }
  }

  const updateUrlQuery = (value) => {
    if (value.length >= 4) {
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.set('q', value)

      history.replace({
        search: searchParams.toString(),
      })
    } else if (urlQuery.has('q')) {
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.delete('q')

      history.replace({
        search: searchParams.toString(),
      })
    }
  }

  const debouncedSearch = useDebounce((value) => {
    searchArtists(value)
    updateUrlQuery(value)
  }, DEBOUNCE_DELAY)

  const handleInputChange = (value) => {
    setSearchTerm(value)

    if (value.length < 4) {
      setArtists([])
    }

    if (value.length >= 4) {
      debouncedSearch(value)
    }
  }

  useEffect(() => {
    const currentQuery = urlQuery.get('q') || ''

    if (currentQuery !== searchTerm) {
      setSearchTerm(currentQuery)
    }

    if (currentQuery && currentQuery.length >= 4) {
      searchArtists(currentQuery)
    } else if (currentQuery.length === 0) {
      setArtists([])
    }
  }, [location])

  const renderArtistImage = (artist) => {
    if (artist.images && artist.images.length > 0) {
      return (
        <img
          src={artist.images[0].url}
          alt={artist.name}
          className={styles.artistImage}
        />
      )
    }
    return <div className={styles.noImage}>Sem imagem</div>
  }

  const renderSkeletonLoading = () => {
    const skeletonIds = ['sk1', 'sk2', 'sk3', 'sk4', 'sk5', 'sk6', 'sk7', 'sk8']

    return skeletonIds.map((id) => (
      <div key={id} className={styles.skeletonWrapper}>
        <SkeletonCard type="artist" />
      </div>
    ))
  }

  const renderResultsContent = () => {
    if (loading) {
      return renderSkeletonLoading()
    }

    if (artists.length > 0) {
      return artists.map((artist) => (
        <Link
          to={`${BASE_URL}artista/${artist.id}`}
          key={artist.id}
          className={styles.artistCard}
        >
          <div className={styles.imageContainer}>
            {renderArtistImage(artist)}
          </div>
          <h3 className={styles.artistName}>{artist.name}</h3>
        </Link>
      ))
    }

    if (searchTerm.length >= 4) {
      return (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#999" />
            </svg>
          </div>
          <div className={styles.noResults}>Nenhum artista encontrado</div>
          <p className={styles.emptyStateText}>Tente buscar por outro nome ou verifique se digitou corretamente.</p>
        </div>
      )
    }

    if (searchTerm.length > 0) {
      return (
        <div className={styles.hint}>
          Digite pelo menos 4 caracteres para buscar
          <div className={styles.typingAnimation}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      )
    }

    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateIcon}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12ZM10 19C8.9 19 8 18.1 8 17C8 15.9 8.9 15 10 15C11.1 15 12 15.9 12 17C12 18.1 11.1 19 10 19Z" fill="#1db954" />
          </svg>
        </div>
        <p className={styles.emptyStateText}>Digite o nome de um artista para começar a busca</p>
      </div>
    )
  }

  const getBuscaUrl = () => {
    if (searchTerm && searchTerm.length >= 4) {
      return `${BASE_URL}busca?q=${encodeURIComponent(searchTerm)}`
    }
    return `${BASE_URL}busca`
  }

  return (
    <>
      <SubHeader
        breadcrumb={[
          { text: 'Home', to: BASE_URL },
          { text: 'Busca', to: getBuscaUrl() },
        ]}
        heading="Busca de Artistas"
      />
      <div className={styles.wrapper}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#666" />
            </svg>

            <input
              type="text"
              className={styles.searchInput}
              placeholder="Digite o nome de um artista"
              value={searchTerm}
              onChange={(e) => handleInputChange(e.target.value)}
            />

            {searchTerm && (
              <button
                className={styles.clearButton}
                onClick={() => handleInputChange('')}
                aria-label="Limpar busca"
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className={styles.results}>
          {renderResultsContent()}
        </div>
      </div>
    </>
  )
}

export default Busca
