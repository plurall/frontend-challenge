import React from 'react'
import PropTypes from 'prop-types'
import { TextBox } from 'plurall-ui'
import styles from './SearchBar.module.css'

const SearchBar = ({ searchArtist }) => {
  let name = ''

  const handle = e => {
    if (e.length <= 4) return
    name = e
    searchArtist(name)
  }

  return (
    <form className={styles.form_search}>
      <TextBox
        placeholder="Buscar artista ..."
        onChange={handle}
      />
    </form>
  )
}

SearchBar.propTypes = {
  searchArtist: PropTypes.func,
}

export default SearchBar
