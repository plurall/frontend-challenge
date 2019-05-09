import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text } from '@plurall/elo'

import styles from './GenreList.module.css'

const GenreList = ({ data }) => (
  <ul>
    <Heading size="small">Lista de gêneros</Heading>
    {data.map(genre => (
      <li className={styles.list} key={genre}>
        <Text>{genre}</Text>
      </li>
    ))}
  </ul>
)
GenreList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default GenreList
