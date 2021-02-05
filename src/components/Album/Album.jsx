import PropTypes from 'prop-types'
import React from 'react'

import styles from './Album.module.css'

export default function Album({ album }) {
  if (!album) return <></>

  const formattedReleaseDate = React.useMemo(() => {
    const [year, month, day] = album.release_date.split('-')

    return `${day}/${month}/${year}`
  }, [album])

  return (
    <div className={styles.album} data-testid="album">
      <div className={styles.header}>
        <img src={album.img} alt={`Capa do album ${album.name}`} />
      </div>
      <div className={styles.body}>
        <span className={styles.name}>{album.name}</span>
        <span className={styles.releaseDate}>{formattedReleaseDate}</span>
      </div>
    </div>
  )
}

Album.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
}
