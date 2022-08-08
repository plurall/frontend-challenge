import React from 'react'
import PropTypes from 'prop-types'
import { IoMdClose } from 'react-icons/io'
import { HiSearch } from 'react-icons/hi'

import styles from './SearchBar.module.scss'

const SearchBar = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      className={styles.input}
      placeholder="Procurar"
    />
    <HiSearch />
    <IoMdClose title="Limpar" onClick={() => onChange('')} />
  </div>
)

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SearchBar
