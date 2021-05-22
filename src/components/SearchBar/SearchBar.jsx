import React, { useEffect } from 'react'
import SomosClient from '../../utils/client'

import styles from './SearchBar.module.css'

function SearchBar() {
  useEffect(() => {
    searchArtists('Michael Jackson')
  }, [])

  function searchArtists(query) {
    SomosClient.searchArtists(query).then(
      res => {
        console.log('respostas', res)
      },
      err => {
        console.log('err', err)
      },
    )
  }

  return (
    <>
      <p>Input</p>
    </>
  )
}

export default SearchBar
