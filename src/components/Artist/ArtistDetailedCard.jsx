import React from 'react'
import PropTypes from 'prop-types'

import { artistType } from 'types'
import { Picture } from 'components'
import styles from './ArtistDetailedCard.module.scss'

const ArtistDetailedCard = ({ artist, show }) =>
  show && (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{artist.name}</h3>
      <p className={styles.popularity}>
        Popularidade{' '}
        <strong className={styles.popularityValue}>{artist.popularity}%</strong>
      </p>
      <div className={styles.genreTagsContainer}>
        {artist.genres.map(genre => (
          <span key={genre} className={styles.genreTag}>
            {genre}
          </span>
        ))}
      </div>
      <Picture src={artist.image} type="artist-large" />
    </div>
  )

ArtistDetailedCard.propTypes = {
  artist: artistType,
  show: PropTypes.bool.isRequired,
}

export default ArtistDetailedCard
