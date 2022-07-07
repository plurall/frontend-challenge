import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { SubHeader, AlbumsSlider } from 'components'
import { SpotifyService } from 'services'

import styles from './Artist.module.scss'

const Artist = () => {
  const [artist, setArtist] = useState(null)
  const [albums, setAlbums] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    async function loadArtist() {
      try {
        const artistData = await SpotifyService.getArtistById(id)
        setArtist(artistData)
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error)
      }
    }

    async function loadArtistAlbum() {
      try {
        const albumsData = await SpotifyService.getArtistAlbums(id)
        setAlbums(albumsData.items)
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error)
      }
    }

    loadArtist()
    loadArtistAlbum()
  }, [id])

  return (
    <>
      <SubHeader
        breadcrumb={[
          { text: 'Home', href: '/' },
        ]}
        heading="Desafio Front-end do Plurall"
      />
      <div className={styles.wrapper}>
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
      </div>
    </>
  )
}

export default Artist
