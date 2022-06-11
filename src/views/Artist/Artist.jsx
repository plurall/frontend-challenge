import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SubHeader, ListAlbum } from 'components'
import { SomosClient } from 'utils'
import styles from './Artist.module.css'

const Artist = () => {
  const client = new SomosClient()
  const [artist, setArtist] = useState({})
  const [albums, setAlbums] = useState([])
  const { id } = useParams()

  async function GetArtist() {
    const artistRequest = await client.showArtist(id)
    if (!artistRequest.id) return
    const artistObject = {
      id: artistRequest.id,
      name: artistRequest.name,
      popularity: artistRequest.popularity,
      image: artistRequest.images.length > 0 ? artistRequest.images[0].url : null,
      genres: artistRequest.genres.join(', '),
      link_external: artistRequest.external_urls,
    }

    return artistObject
  }

  async function GetArtistAlbums() {
    const AlbumsRequest = await client.getArtistAlbums(id)

    if (!AlbumsRequest.items) return null

    const albumsObjects = AlbumsRequest.items.map(album => {
      const albumObject = {
        id: album.id,
        name: album.name,
        date: new Date(album.release_date).toLocaleDateString('pt-BR'),
        image:
          album.images.length > 0
            ? album.images[0].url
            : null,
      }

      return albumObject
    })
    return albumsObjects
  }

  useEffect(() => {
    GetArtist(id).then(item => {
      setArtist(item)
    })
    GetArtistAlbums(id).then(item => {
      setAlbums(item)
    })
  }, [])

  return (
    <>
      <SubHeader
        buttonHref="/busca"
        breadcrumb={[{ text: 'Artista' }]}
        heading={artist.name ? artist.name : ''}
      />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.imagebox}>
            <img
              className={styles.image}
              src={artist.image}
              alt={`Imagem do artista: ${artist.name}`}
            />
          </div>
          <div className={styles.details}>
            <h2 className={styles.name}>{artist.name}</h2>
            <div className={styles.genres}>
              <span>{artist.genres}</span>
            </div>
            <div className={styles.popularities}>
              <p>Popularidade:</p> <div className={styles.popularity}><span style={{width: `${artist.popularity}%`}}></span></div>
            </div>
          </div>
        </div>
        <ListAlbum albums={albums} />
      </div>
    </>
  )
}

export default Artist
