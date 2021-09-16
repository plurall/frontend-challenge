import React, { useEffect, useState } from 'react'
import { SomosClient } from 'utils'

import styles from './Artista.module.css'

const Artista = props => {
  const { id } = props.match.params
  const client = new SomosClient()
  const [album, setAlbum] = useState([])
  const [data, setData] = useState()
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    async function requestAPI() {
      setLoading(true)
      const artist = await client.getArtist(id)
      console.log('artist', artist)
      setData(artist)

      const albums = await client.getAlbums(id)
      const album = albums.items.map(({ name, release_date, images }) => {
        const image = images.length ? images[0].url : ''
        return { release_date, name, image }
      })
      setAlbum(album)

      setLoading(false)
    }

    requestAPI()
  }, [id])

  return (
    <div className={styles['artist-wrapper']}>
      {loading && <p>carregando...</p>}
      <div className={styles['artist-grid']}>
        <div>
          <h1>Artista: {!loading && data && data.name}</h1>
          <p>Generos:{!loading && data && data.genres[0]}</p>
          <p>Popularidade:{!loading && data && data.popularity}</p>
        </div>
        <div>
          <img src={!loading && data && data.images[2].url}></img>
        </div>
      </div>
      <section className={styles['artist-albuns start']}>
        <h2 className={styles['artist-sub-titulo']}> ALBUNS </h2>
        <ul className={styles['artist-albums-list']}>
          {album &&
            album.map(item => (
              <li key={item.id}>
                <img src={item.image} alt="artista" />
                <h3>{item.name}</h3>
                <h3>{item.release_date}</h3>
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}

export default Artista
