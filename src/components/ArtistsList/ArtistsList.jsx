import React from 'react'
import PropTypes from 'prop-types'

import { ArtistCard } from 'components'

import styles from './ArtistsList.module.scss'

const ArtistsList = ({ artists }) => {
  return (
    <div className={styles.listContainer}>
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  )
}

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
}

export default ArtistsList
