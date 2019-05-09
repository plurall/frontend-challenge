import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text } from '@plurall/elo'
import { formatDate } from '../../utils'
import styles from './Album.module.css'

const Album = ({ data }) => (
  <div>
    <Heading size="small">Álbuns do artista</Heading>
    <ul className={styles.wrapper_list}>
      {data.map(album => (
        <li className={styles.list} key={album.id}>
          <img
            className={styles.img}
            src={album.images[1].url}
            alt={album.name}
          />
          <Text>{album.name}</Text>
          <Text>
            <time>{formatDate(album.release_date)}</time>
          </Text>
        </li>
      ))}
    </ul>
  </div>
)
Album.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
}

export default Album
