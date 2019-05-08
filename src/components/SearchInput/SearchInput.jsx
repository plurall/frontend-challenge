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
  buttonHref: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export default SearchInput
