import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { SomosClient } from 'utils'
import { useParams } from 'react-router-dom'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'

import styles from './Artist.module.css'

const client = new SomosClient()
const Artist = () => {
  const { id } = useParams()

  const [artist, setArtist] = useState()
  const [albums, setAlbums] = useState()

  const routes = [
    { name: 'Home', url: '/' },
    { name: 'Busca', url: '/busca' },
    { name: 'Artista', url: `/artista/${id}` },
  ]

  const name = 'Nome: '
  const genre = 'Gênero: '
  const popularity = 'Popularidade: '

  useEffect(() => {
    async function getArtist() {
      const data = await client.getArtistId(id)
      const dataAlbums = await client.getAlbumsById(id)
      setArtist(data)
      setAlbums(dataAlbums.items)
    }
    getArtist()
  }, [id])
  return (
    <>
      <Breadcrumb routes={routes} />
      <h1>Artista</h1>
      <div className={styles.content}>
        <div className={styles.card}>
          <div>
            <img className={styles.imgArtist} alt={artist?.name} src={artist?.images[0]?.url} />
          </div>
          <div className={styles.infos}>
            <label htmlFor="name">{name}{artist?.name}
            </label>
            <label>{genre}
              {artist?.genres.join(', ')}
            </label>
            <label>{popularity}
              {artist?.popularity}
            </label>
          </div>
        </div>
        {albums?.length && (
          <div className={styles.section}>
            <h1>Álbuns</h1>
            <div className={styles.albums}>
              {albums.map(album => (
                <div className={styles.albumInfo}>
                  <img className={styles.img} alt={album.name} src={album.images[0]?.url} />
                  <div className={styles.albumName}>
                    {album.name}
                  </div>
                  <div className={styles.data}>
                    {format(utcToZonedTime(album.release_date, 'UTC'), 'dd/MM/yyyy')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}


export default Artist
