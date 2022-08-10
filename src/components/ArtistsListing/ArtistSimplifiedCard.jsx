import React from 'react'
import { Link } from 'react-router-dom'

import { artistType } from 'types'
import { ArtistPicture } from 'components'
import styles from './ArtistSimplifiedCard.module.scss'

const ArtistSimplifiedCard = ({ artist }) => (
  <Link to={`/artista/${artist.id}`} className={styles.wrapper}>
    <h3 className={styles.name}>{artist.name}</h3>
    <p className={styles.popularity}>
      Popularidade{' '}
      <strong className={styles.popularityValue}>{artist.popularity}%</strong>
    </p>
    <ArtistPicture src={artist.image} />
  </Link>
)

ArtistSimplifiedCard.propTypes = {
  artist: artistType.isRequired,
}

export default ArtistSimplifiedCard
