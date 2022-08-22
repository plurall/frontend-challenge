import React from 'react'

import PropTypes from 'prop-types'

import styles from './Input.module.scss'

const Input = ({ value, handleChange }) => {
  const { input } = styles

  return (
    <>
      <input
        className={input}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        placeholder="Buscar artistas"
      />
    </>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Input
