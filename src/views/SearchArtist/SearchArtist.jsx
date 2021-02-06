import React from 'react'

import { InputSearch, Card } from 'components'
import { SomosClient } from 'utils'

import styles from './SearchArtist.module.css'

export default function SearchArtist() {
  const [artists, setArtists] = React.useState()

  const getArtists = async query => {
    const api = new SomosClient()

    const response = await api.getArtists(query)
    setArtists(() => response.artists.items)
  }

  return (
    <div className={styles.searchArtist}>
      <h1 className={styles.title}>Busca de artistas</h1>
      <InputSearch action={getArtists} placeholder="Digite o nome do artista" />
      {artists && (
        <>
          <h2>Lista de artistas</h2>
          <ArtistList artists={artists} />
        </>
      )}
    </div>
  )
}

const ArtistList = ({ artists }) => (
  <ul className={styles.artistList}>
    {artists.map(artist => (
      <Card
        img={artist.images.length > 0 ? artist.images[1].url : ''}
        alt={`Foto do artista ${artist.name}`}
      >
        <span className={styles.artistName}>{artist.name}</span>
      </Card>
    ))}
  </ul>
)
