import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './CardArtist.module.css'
import CoverImage from './../CoverImage'

const CardArtist = ({ artist, artists, searchInputValue }) => (
  <Link
    to={{
      pathname: `/artista/${artist.id}`,
      artist,
      artists,
      searchInputValue,
    }}
    className={styles.cardArtist}
  >
    <CoverImage imageList={artist.images} />
    <h5 className={styles.nameArtist}>{artist.name}</h5>
  </Link>
)

CardArtist.propTypes = {
  artist: PropTypes.object,
  artists: PropTypes.array,
  searchInputValue: PropTypes.string,
}

export default CardArtist
