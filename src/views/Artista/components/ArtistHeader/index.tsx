import React from 'react'
import Genres from '../Genres'
import Popularity from '../Popularity'
import * as styles from './ArtistHeader.module.scss'
import { IArtistFull } from 'interfaces'

interface ArtistHeaderProps {
  artist: IArtistFull
}

export const ArtistHeader: React.FC<ArtistHeaderProps> = ({ artist }) => {
  const { images, name, popularity, genres } = artist

  return (
    <div className={styles.artistHeader}>
      <img src={images[0]?.url} alt={name} className={styles.artistImage} />
      <div className={styles.artistInfo}>
        <h1 className={styles.artistName}>{name}</h1>
        <Popularity popularity={popularity} />
        <Genres genres={genres} />
      </div>
    </div>
  )
}
