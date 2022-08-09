import React from 'react'
import PropTypes from 'prop-types'

import styles from './SearchRemainingLetters.module.scss'

const SearchRemainingLetters = ({ remaining, show }) =>
  show && (
    <div className={styles.wrapper}>
      Digite mais {remaining} letra
      {remaining === 1 ? '' : 's'}
    </div>
  )

SearchRemainingLetters.propTypes = {
  remaining: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
}

export default SearchRemainingLetters
