import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from 'utils'

import styles from './Album.module.scss'

const Album = ({ album }) => {
  const { name, release_date: releaseDate, images } = album

  return (
    <div className={styles.container} title={name}>
      <img src={images[0]?.url} alt={name} />
      <p>
        {name.substr(0, 39)}
        {name.length > 39 && '...'}
      </p>
      <small>{formatDate(releaseDate, 'DD/MM/YYYY')}</small>
    </div>
  )
}

Album.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string,
    release_date: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  }),
}

export default Album
