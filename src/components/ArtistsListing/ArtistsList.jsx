import React from 'react'
import PropTypes from 'prop-types'

import { artistType } from 'types'
import { ArtistSmallCard } from 'components'

import styles from './ArtistsList.module.scss'

const ArtistsList = ({ artists }) =>
  !!artists.length && (
    <div className={styles.wrapper}>
      {artists.map(artist => (
        <ArtistSmallCard key={artist.id} artist={artist} />
      ))}
    </div>
  )

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(artistType).isRequired,
}

export default ArtistsList
