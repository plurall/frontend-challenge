import { TextBox, Alert } from 'plurall-ui'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import styles from './CustomTextBox.module.css'

const CustomTextBox = ({
  disabled,
  className,
  style,
  setCurrentQuery,
  errorMessage,
  placeholder,
}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (setCurrentQuery != null) {
        setCurrentQuery(query)
      }
    }, 500)
    return () => clearTimeout(timeOutId)
  }, [query])

  return (
    <>
      <TextBox
        className={className}
        onChange={e => setQuery(e)}
        value={query}
        disabled={disabled}
        style={style}
        placeholder={placeholder}
      />
      {errorMessage != null && (
        <Alert name="Error" type="error" dismissible={false}>
          {errorMessage}
        </Alert>
      )}
    </>
  )
}

CustomTextBox.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  setCurrentQuery: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
}

export default CustomTextBox
