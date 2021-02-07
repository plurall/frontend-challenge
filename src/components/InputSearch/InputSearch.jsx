import PropTypes from 'prop-types'
import React from 'react'

import styles from './InputSearch.module.css'

export default function InputSearch({ placeholder, action }) {
  const handleInput = React.useCallback(e => action(e.target.value), [])

  return (
    <input
      onChange={handleInput}
      placeholder={placeholder}
      className={styles.inputSearch}
    />
  )
}

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}
