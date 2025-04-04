import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { SubHeader, SkeletonCard } from 'components'
import { SomosClient } from 'utils'
import { useSearch } from 'utils/SearchContext'

import styles from './Artista.module.scss'

const BASE_URL = '/'

const formatDate = (dateString) => {
  if (!dateString) return ''

  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const Artista = () => {
  const { id } = useParams()
  const [artist, setArtist] = useState(null)
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { searchTerm } = useSearch()

  const [client] = useState(() => new SomosClient())

  useEffect(() => {
    const fetchArtistData = async () => {
      setLoading(true)
      try {
        const artistData = await client.getArtist(id)
        setArtist(artistData)

        const albumsData = await client.getArtistAlbums(id, 10)
        setAlbums(albumsData.items)
      } catch (err) {
        console.error('Erro ao buscar dados do artista:', err)
        setError('Não foi possível carregar os dados do artista.')
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }
    }

    fetchArtistData()
  }, [id, client])

  const getBuscaUrl = () => {
    if (searchTerm && searchTerm.length >= 4) {
      return `${BASE_URL}busca?q=${encodeURIComponent(searchTerm)}`
    }
    return `${BASE_URL}busca`
  }

  const renderArtistSkeleton = () => (
    <div className={styles.artistInfoSkeleton}>
      <div className={styles.imageSkeletonContainer}>
        <div className={styles.imageSkeleton} />
      </div>
      <div className={styles.detailsSkeleton}>
        <div className={styles.nameSkeleton} />
        <div className={styles.popularitySkeleton}>
          <div className={styles.popularityLabelSkeleton} />
          <div className={styles.popularityBarSkeleton} />
        </div>
        <div className={styles.genresSkeleton}>
          <div className={styles.genresLabelSkeleton} />
          <div className={styles.genresListSkeleton}>
            <div className={styles.genreSkeleton} />
            <div className={styles.genreSkeleton} />
            <div className={styles.genreSkeleton} />
          </div>
        </div>
      </div>
    </div>
  )

  const renderAlbumsSkeleton = () => (
    <div className={styles.albumsSectionSkeleton}>
      <div className={styles.albumsTitleSkeleton} />
      <div className={styles.albumsGrid}>
        {['album1', 'album2', 'album3', 'album4'].map((albumId) => (
          <div className={styles.albumCardWrapper} key={albumId}>
            <SkeletonCard type="album" />
          </div>
        ))}
      </div>
    </div>
  )

  const renderAlbumCard = (album) => {
    const spotifyUrl = album.external_urls && album.external_urls.spotify

    const albumContent = (
      <>
        <div className={styles.albumImageContainer}>
          {album.images && album.images.length > 0 ? (
            <img
              src={album.images[0].url}
              alt={album.name}
              className={styles.albumImage}
            />
          ) : (
            <div className={styles.noImage}>Sem imagem</div>
          )}
        </div>
        <div className={styles.albumInfo}>
          <h3 className={styles.albumName}>{album.name}</h3>
          <p className={styles.albumDate}>
            {formatDate(album.release_date)}
          </p>

          {spotifyUrl && (
            <div className={styles.spotifyLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 16.5C16.27 16.5 16.04 16.42 15.84 16.24C14.8 15.43 13.53 14.88 12.19 14.62C10.93 14.37 9.63 14.41 8.39 14.73C7.97 14.85 7.52 14.58 7.4 14.16C7.28 13.74 7.55 13.29 7.97 13.17C9.43 12.79 10.96 12.74 12.44 13.05C14.01 13.37 15.48 14.03 16.69 14.97C17.05 15.26 17.11 15.82 16.82 16.19C16.65 16.39 16.58 16.5 16.5 16.5ZM17.5 13.5C17.22 13.5 16.95 13.4 16.7 13.18C15.39 12.12 13.78 11.43 12.06 11.13C10.33 10.81 8.57 10.92 6.92 11.4C6.4 11.56 5.88 11.25 5.74 10.75C5.59 10.24 5.9 9.72 6.41 9.58C8.34 9.02 10.41 8.88 12.42 9.24C14.49 9.61 16.36 10.42 17.89 11.68C18.32 12.04 18.38 12.7 18.03 13.13C17.83 13.37 17.66 13.5 17.5 13.5ZM18.7 10.23C18.43 10.47 18.08 10.5 17.83 10.5C17.55 10.5 17.27 10.42 17.05 10.23C14.88 8.53 12.23 7.5 9.47 7.2C6.59 6.88 3.77 7.38 1.3 8.63C0.8 8.86 0.19 8.63 -0.04 8.13C-0.26 7.63 -0.04 7.03 0.47 6.8C3.28 5.35 6.47 4.78 9.7 5.15C12.82 5.49 15.83 6.68 18.29 8.63C18.73 9 18.84 9.63 18.47 10.07L18.7 10.23Z" fill="#1db954" />
              </svg>
              <span>Ver no Spotify</span>
            </div>
          )}
        </div>
      </>
    )

    if (spotifyUrl) {
      return (
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.albumCard}
          key={album.id}
        >
          {albumContent}
        </a>
      )
    }

    return (
      <div className={styles.albumCard} key={album.id}>
        {albumContent}
      </div>
    )
  }

  if (loading) {
    return (
      <>
        <SubHeader
          breadcrumb={[
            { text: 'Home', to: '/' },
            { text: 'Busca', to: getBuscaUrl() },
            { text: 'Carregando...' },
          ]}
          heading="Carregando artista..."
        />
        <div className={styles.wrapper}>
          {renderArtistSkeleton()}
          {renderAlbumsSkeleton()}
        </div>
      </>
    )
  }

  if (error || !artist) {
    return (
      <>
        <SubHeader
          breadcrumb={[
            { text: 'Home', to: '/' },
            { text: 'Busca', to: getBuscaUrl() },
            { text: 'Erro' },
          ]}
          heading="Erro"
        />
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#ff6b6b" />
            </svg>
          </div>
          <div className={styles.error}>
            {error || 'Artista não encontrado.'}
          </div>
          <p className={styles.errorDescription}>
            Não foi possível carregar as informações do artista. Por favor, tente novamente.
          </p>
          <Link to={getBuscaUrl()} className={styles.backButton}>
            Voltar para a busca
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <SubHeader
        breadcrumb={[
          { text: 'Home', to: BASE_URL },
          { text: 'Busca', to: getBuscaUrl() },
          { text: artist.name },
        ]}
        heading={artist.name}
      />

      <div className={styles.wrapper}>
        <div className={styles.artistInfo}>
          <div className={styles.imageContainer}>
            {artist.images && artist.images.length > 0 ? (
              <img
                src={artist.images[0].url}
                alt={artist.name}
                className={styles.artistImage}
              />
            ) : (
              <div className={styles.noImage}>Sem imagem</div>
            )}
          </div>

          <div className={styles.artistDetails}>
            <h1 className={styles.artistName}>{artist.name}</h1>

            <div className={styles.popularityContainer}>
              <h3>Popularidade</h3>
              <div className={styles.popularityBar}>
                <div
                  className={styles.popularityFill}
                  style={{ width: `${artist.popularity}%` }}
                />
              </div>
              <span className={styles.popularityValue}>{artist.popularity}%</span>
            </div>

            {artist.genres && artist.genres.length > 0 && (
              <div className={styles.genresContainer}>
                <h3>Gêneros</h3>
                <ul className={styles.genresList}>
                  {artist.genres.map((genre) => (
                    <li key={`genre-${genre}`} className={styles.genreItem}>
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {artist.external_urls && artist.external_urls.spotify && (
              <a
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.spotifyArtistButton}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 16.5C16.27 16.5 16.04 16.42 15.84 16.24C14.8 15.43 13.53 14.88 12.19 14.62C10.93 14.37 9.63 14.41 8.39 14.73C7.97 14.85 7.52 14.58 7.4 14.16C7.28 13.74 7.55 13.29 7.97 13.17C9.43 12.79 10.96 12.74 12.44 13.05C14.01 13.37 15.48 14.03 16.69 14.97C17.05 15.26 17.11 15.82 16.82 16.19C16.65 16.39 16.58 16.5 16.5 16.5ZM17.5 13.5C17.22 13.5 16.95 13.4 16.7 13.18C15.39 12.12 13.78 11.43 12.06 11.13C10.33 10.81 8.57 10.92 6.92 11.4C6.4 11.56 5.88 11.25 5.74 10.75C5.59 10.24 5.9 9.72 6.41 9.58C8.34 9.02 10.41 8.88 12.42 9.24C14.49 9.61 16.36 10.42 17.89 11.68C18.32 12.04 18.38 12.7 18.03 13.13C17.83 13.37 17.66 13.5 17.5 13.5ZM18.7 10.23C18.43 10.47 18.08 10.5 17.83 10.5C17.55 10.5 17.27 10.42 17.05 10.23C14.88 8.53 12.23 7.5 9.47 7.2C6.59 6.88 3.77 7.38 1.3 8.63C0.8 8.86 0.19 8.63 -0.04 8.13C-0.26 7.63 -0.04 7.03 0.47 6.8C3.28 5.35 6.47 4.78 9.7 5.15C12.82 5.49 15.83 6.68 18.29 8.63C18.73 9 18.84 9.63 18.47 10.07L18.7 10.23Z" fill="white" />
                </svg>
                <span>Ver artista no Spotify</span>
              </a>
            )}
          </div>
        </div>

        <div className={styles.albumsSection}>
          <h2 className={styles.albumsTitle}>Álbuns</h2>

          {albums.length > 0 ? (
            <div className={styles.albumsGrid}>
              {albums.map(album => renderAlbumCard(album))}
            </div>
          ) : (
            <div className={styles.noAlbums}>
              <div className={styles.emptyStateIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12ZM10 19C8.9 19 8 18.1 8 17C8 15.9 8.9 15 10 15C11.1 15 12 15.9 12 17C12 18.1 11.1 19 10 19Z" fill="#999" />
                </svg>
              </div>
              <p>Este artista não possui álbuns disponíveis.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Artista
