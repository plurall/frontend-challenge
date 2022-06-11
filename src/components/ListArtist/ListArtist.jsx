import React from 'react'
import PropTypes from 'prop-types'
import { CardArtist } from '../CardArtist'
import styles from './ListArtist.module.css'

const ListArtist = ({ artists }) => {
  return (
    <ul className={styles.list}>
      {artists.map(artist => (
        <li key={artist.id}>
          <CardArtist
            name={artist.name ? artist.name : ''}
            image={artist.images[0] ? artist.images[0].url : null}
            artist_id={artist.id}
            popularity={artist.popularity}
            genres={artist.genres}
          />
        </li>
      ))}
    </ul>
  )
}
ListArtist.propTypes = {
  artists: PropTypes.array,
}
export default ListArtist
