import { Layout, ListArtists, Loading, SubHeader } from 'components'
import React, { useState } from 'react'
import noImage from 'assets/noImage.png'

import { SomosClient } from 'utils'
import { Button } from 'plurall-ui'

import styles from './Search.module.css'

const Search = () => {
  const [results, setResults] = useState([])
  const [emptyReturn, setEmptyReturn] = useState(false)
  const [textSearch, setTextSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const searchArtists = query => {
    // eslint-disable-next-line no-unused-expressions
    query && setLoading(true)
    SomosClient.searchArtists(query).then(
      res => {
        const artists = res.data.artists.items.map(artist => {
          const { id, name, images } = artist
          const image = images.length ? images[0].url : noImage

          return { id, name, image }
        })
        setLoading(false)

        setResults(artists)

        if (!artists.length) {
          setEmptyReturn(true)
        } else {
          setEmptyReturn(false)
        }
      },
      err => {
        console.log(err)
      },
    )
  }

  const loadOnChange = e => {
    setTextSearch(e.target.value.replace(/\s+/g, ' ').trim())
    if (textSearch.length > 3) {
      searchArtists(textSearch)
    }
  }

  const getSearchButton = () => searchArtists(textSearch)

  return (
    <Layout>
      <SubHeader
        breadcrumb={[{ text: 'Home', href: '/' }, { text: 'Busca' }]}
        buttonHref="/"
        heading="Busca de artitas - Spotify"
      />
      <div className={styles.wrapper}>
        <span className={styles.inputSearch}>
          <input
            name="search"
            type="search"
            onChange={e => loadOnChange(e)}
            placeholder="Buscar Artista"
          />
        </span>
        <Button onClick={getSearchButton}>Buscar</Button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <ListArtists results={results} emptyReturn={emptyReturn} />
      )}
    </Layout>
  )
}

export default Search
