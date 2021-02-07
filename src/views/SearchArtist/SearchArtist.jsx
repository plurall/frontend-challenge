import React from 'react'

import { InputSearch, Card } from 'components'
import { SomosClient } from 'utils'

import { Link } from 'react-router-dom'

import styles from './SearchArtist.module.css'
import cardStyles from 'components/Card/Card.module.css'

export default function SearchArtist() {
  const [artists, setArtists] = React.useState([])

  const getArtists = React.useCallback(async query => {
    const api = new SomosClient()

    const response = await api.getArtists(query)

    if (response.error) return setArtists([])
    setArtists(() => response.artists.items)
  }, [])

  return (
    <div className={styles.searchArtist}>
      <h1 className={styles.title}>Busca de artistas</h1>
      <InputSearch action={getArtists} placeholder="Digite o nome do artista" />
      {artists.length > 0 && (
        <>
          <h2 className={cardStyles.listTitle}>Lista de artistas</h2>
          <ArtistList artists={artists} />
        </>
      )}
    </div>
  )
}

const ArtistList = ({ artists }) => {
  return (
    <ul className={cardStyles.list}>
      {artists.map(artist => (
        <Link
          to={`/artista/${artist.id}`}
          className={cardStyles.listItem}
          underline="none"
          key={artist.id}
        >
          <Card
            img={
              artist.images.length > 0
                ? artist.images[1].url
                : 'default-user.png'
            }
            alt={`Foto do artista ${artist.name}`}
          >
            <span className={styles.artistName}>{artist.name}</span>
          </Card>
        </Link>
      ))}
    </ul>
  )
}
