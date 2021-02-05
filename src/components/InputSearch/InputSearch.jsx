import PropTypes from 'prop-types'
import React from 'react'

export default function InputSearch({ placeholder, action }) {
  const handleInput = e => {
    const value = e.target.value
    if (value.length > 3) {
      action(value)
    }
  }

  return <input onChange={handleInput} placeholder={placeholder} />
}

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}
