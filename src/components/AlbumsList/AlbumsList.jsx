import { Heading, Text } from '@plurall/elo'
import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from 'utils'
import styles from './AlbumsList.module.css'

const AlbumsList = ({ albums }) => (
  <div>
    <Heading size="normal">Albums:</Heading>
    {albums && albums.length ? (
      <ul
        className={styles.list}
      >
        {albums.map(album => (
          <li
            key={album.id}
            className={styles.item}
          >
            <div
              className={styles.album}
            >
              {album.images && album.images.length ? (
                <img
                  src={album.images[2].url}
                  alt={album.name}
                  className={styles.image}
                />
              ) : (
                null
              )}
              <div
                className={styles.itemTexts}
              >
                <Heading
                  size="small"
                >
                  {album.name}
                </Heading>
                <Text
                  element="p"
                >
                  Release date: <time>{formatDate(album.release_date)}</time>
                </Text>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <Text
        element="p"
      >
        Empty albums.
      </Text>
    )}
  </div>
)

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
}

export default AlbumsList
