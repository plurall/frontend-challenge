import React from 'react'

import { InputSearch, Card } from 'components'

import styles from './SearchArtist.module.css'

export default function SearchArtist() {
  const [artists, setArtists] = React.useState([])

  const mockAction = artist => {
    console.log(artist)
  }

  return (
    <div className={styles.searchArtist}>
      <h1 className={styles.title}>Busca de artistas</h1>
      <InputSearch action={mockAction} placeholder="Digite o nome do artista" />
      {artists.length > 0 && (
        <>
          <h2>Lista de artistas</h2>
          <ArtistList />
        </>
      )}
    </div>
  )
}

const ArtistList = artists => (
  <ul className={styles.artistList}>
    {artists.map(artist => (
      <Card img={artist.images[1].url} alt={`Foto do artista ${artist.name}`}>
        <span className={styles.artistName}>{artist.name}</span>
      </Card>
    ))}
  </ul>
)
