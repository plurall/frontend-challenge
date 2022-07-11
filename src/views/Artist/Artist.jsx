import React, { useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import { unstable_batchedUpdates } from 'react-dom'
import { useHistory, useParams } from 'react-router-dom'

import { SubHeader, AlbumsSlider } from 'components'
import { SpotifyService } from 'services'

import styles from './Artist.module.scss'

const Artist = () => {
  const [artist, setArtist] = useState(null)
  const [albums, setAlbums] = useState(null)

  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    async function loadArtistAndAlbum() {
      try {
        const artistData = await SpotifyService.getArtistById(id)
        const albumsData = await SpotifyService.getArtistAlbums(id)
        /* No react 18, todos os updates passaram a ser batched por padrão.
           Logo, não há problema em forçar para prevenir re-renders      */
        unstable_batchedUpdates(() => {
          setArtist(artistData)
          setAlbums(albumsData.items)
        })
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error)
        history.push('/')
      }
    }

    loadArtistAndAlbum()
  }, [id, history])

  return (
    <>
      <SubHeader
        breadcrumb={[
          { text: 'Home', href: '/' },
        ]}
        heading="Desafio Front-end do Plurall"
      />
      <section className={styles.wrapper}>
        {artist && (
          <div className={styles.artist}>
            <div className={styles.banner}>
              <img src={artist.images[0]?.url} alt={artist.name} />
            </div>
            <div className={styles.bio}>
              <header>
                <h1>{artist.name}</h1>
              </header>
              <div className={styles.bioBody}>
                <ul>
                  <li>
                    <strong>Popularidade: </strong>{artist.popularity}
                  </li>
                  <li>
                    <strong>Gêneros: </strong>
                    {artist.genres.map((genre, index) => (
                      <span key={genre}>
                        {genre}
                        {index !== (artist.genres.length - 1) && ', '}
                      </span>
                  ))}
                  </li>
                </ul>
                {albums && (
                  <div className={styles.albumsWrapper}>
                    <h2>Lista de Álbums</h2>
                    <AlbumsSlider albums={albums} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Artist
