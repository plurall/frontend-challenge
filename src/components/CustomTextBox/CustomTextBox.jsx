import TextBox from 'plurall-ui/dist/TextBox/TextBox'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import styles from './CustomTextBox.module.css'

const CustomTextBox = ({ disabled, className, style, setCurrentQuery }) => {
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
    <TextBox
      className={className}
      onChange={e => setQuery(e)}
      value={query}
      disabled={disabled}
      style={style}
    />
  )
}

CustomTextBox.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  setCurrentQuery: PropTypes.func,
}

export default CustomTextBox
