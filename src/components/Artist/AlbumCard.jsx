import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlayFill } from 'react-icons/bs'

import { albumType } from 'types'
import { formatDate } from 'utils'
import { ArtistPicture } from 'components'
import styles from './AlbumCard.module.scss'

const AlbumCard = ({ album }) => {
  const pathname = `${process.env.REACT_APP_ALBUM_EXTERNAL_URL}/${album.id}`

  return (
    <Link to={{ pathname }} target="_blank" className={styles.wrapper}>
      <h3 className={styles.name}>{album.name}</h3>
      <p className={styles.details}>
        <span className={styles.date}>{formatDate(album.release_date)}</span>
        <span className={styles.separator} />
        <span className={styles.tracks}>{album.total_tracks} faixas</span>
      </p>
      <button className={styles.button}>
        <BsPlayFill />
      </button>
      <ArtistPicture src={album.image} />
    </Link>
  )
}

AlbumCard.propTypes = {
  album: albumType.isRequired,
}

export default AlbumCard
