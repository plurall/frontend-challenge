import PropTypes from 'prop-types'
import React from 'react'

import { SearchBox } from 'plurall-ui'

//import styles from './ButtonLink.module.css'

const SearchInput = ({ label, placeholder, notFoundMessage, onChange, value }) => (
  <SearchBox
    label={label}
    placeholder={placeholder}
    notFoundMessage={notFoundMessage}
    items={[]}
    value={value}
    onChange={value => onChange(value)}
  />
)

SearchInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  notFoundMessage: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default SearchInput
