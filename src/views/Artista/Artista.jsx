import React, { useEffect, useState } from 'react'
import { SomosClient } from 'utils'
import Loading from '../../components/Loading'

import styles from './Artista.module.css'

const Artista = ({ match }) => {
  const { params } = match
  const { id } = params

  const [artist, setArtist] = useState(null)
  const [artistAlbums, setArtistAlbums] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const client = new SomosClient()
      const responseArtist = await client.showArtist(id)
      const responseArtistAlbums = await client.getArtistAlbums(id)

      console.log(responseArtistAlbums)

      setArtist(responseArtist)
      setArtistAlbums(responseArtistAlbums)
    }

    fetch()
  }, [id])

  if (!artist || !artistAlbums) return <Loading />

  return (

    <div>
      <h1> {artist.name} </h1>
      <p> Popularidade {artist.popularity}</p>
      <img src={artist.images[1].url} alt={artist.name} />
      <p>Generos: {artist.genres.map(genre => genre)}</p>

      <div>{
          artistAlbums.items.map(album =>
            (
              <div key={album.id} className={styles.albumcaixa}>
                <img src={album.images[2].url} alt={album.name} />
                <p>Album: {album.name}</p>
                <p>Data: {album.release_date}</p>
              </div>

            ),
            )}
      </div>
    </div>

  )
}

export default Artista
