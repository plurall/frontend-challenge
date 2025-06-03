import React from 'react'
import * as styles from '../Artist.module.scss'
import { Artist } from 'types/artist'
import { GenresList } from './GenresList'

export function ArtistHeader({ artist }: { artist: Artist }) {
  return (
    <header className={styles.header}>
      <h1>{artist.name}</h1>
      <img
        src={artist.images?.[0]?.url || '/placeholder.png'}
        alt={artist.name}
        className={styles.artistImage}
      />
      <p className={styles.popularity}>Popularidade: {artist.popularity}</p>
      <GenresList genres={artist.genres} />
    </header>
  )
}
