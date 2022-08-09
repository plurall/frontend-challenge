import React from 'react'
import PropTypes from 'prop-types'

import { artistType } from 'types'
import { ArtistSmallCard } from 'components'

import styles from './ArtistsList.module.scss'

const ArtistsList = ({ artists, total, show }) =>
  show && (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Artistas</h2>
        <p className={styles.totalCount}>{total} artistas relacionados</p>
      </div>
      <ul className={styles.list}>
        {artists.map(artist => (
          <ArtistSmallCard key={artist.id} artist={artist} />
        ))}
      </ul>
    </div>
  )

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(artistType).isRequired,
  total: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
}

export default ArtistsList
