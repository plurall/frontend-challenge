import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text } from '@plurall/elo'

import styles from './GenresList.module.css'

const GenresList = ({ genres }) => (
  <div>
    <Heading size="normal">Genres:</Heading>
    {genres && genres.length ? (
      <ul
        className={styles.list}
      >
        {genres.map(genre => (
          <li
            key={genre}
            className={styles.item}
          >
            <Text
              element="p"
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </Text>
          </li>
        ))}
      </ul>
    ) : (
      <Text
        element="p"
      >
        Empty genres.
      </Text>
    )}
  </div>
)

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default GenresList
