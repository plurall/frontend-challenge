import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SomosClient } from '../../utils'
import AlbumTable from '../AlbumTable'
import styles from './ProfileArtist.module.css'

const ProfileArtist = () => {
  const [artist, setListArtist] = useState('')
  const [albums, setAlbum] = useState('')
  const { id: artistId } = useParams()

  const client = new SomosClient()

  useEffect(() => {
    client.searchArtistiId(artistId).then(res => {
      if (res) {
        setListArtist(res)
      }
    })
    setListArtist([])
  }, [])

  useEffect(() => {
    client.getSearchAlbum(artistId).then(result => {
      if (result) {
        setAlbum(result)
      }
    })
    setAlbum([])
  }, [])

  return (
    <>
      <div className={styles.link}>
        <Link to={`/search`}>Voltar</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.profileArtist}>
          <div className={styles.imageArtist}>
            {artist.images && (
              <img src={artist.images[0].url} alt={artist.name} />
            )}
          </div>
          <div className={styles.details}>
            <div className={styles.name}>{artist.name}</div>

            <h2>Popularidade: {artist.popularity}</h2>
            <h2>Gênero</h2>
            {artist.genres ? (
              <ul className={styles.listName}>
                {artist.genres.map(genre => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            ) : (
              <span>Não possui gênero</span>
            )}
          </div>
        </div>

        <div className={styles.albuns}>
          <h2>os 10 Albuns de mais sucesso!</h2>
          {albums &&
            albums.map(album => <AlbumTable key={album.id} album={album} />)}
        </div>
      </div>
    </>
  )
}

export default ProfileArtist
