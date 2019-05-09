import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text } from '@plurall/elo'

import styles from './GenreList.module.css'

const GenreList = ({ data }) => (
  <div className={styles.wrapperGender}>
    {/* {console.log('GENRE LIST', data)} */}
    <Heading size="small">Lista de gêneros</Heading>
    <ul className={styles.wrapperList}>
      {data.map(genre => (
        <li className={styles.list} key={genre}>
          <div className={styles.genre}>
            <Text>{genre}</Text>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
GenreList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default GenreList
