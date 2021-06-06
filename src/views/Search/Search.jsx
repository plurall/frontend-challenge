import React, { useEffect } from 'react'
import { useState } from 'react'
import { Layout, SubHeader, Results } from '../../components'
import { SomosClient } from '../../utils'
import noImage from '../../assets/noImage.png'
import styles from './Search.module.css'

function Search() {
  const [artista, setArtista] = useState('')
  const [data, setData] = useState([])

  function searchArtists(textSearch) {
    SomosClient.searchArtists(textSearch).then(({ data }) => {
      setData(normalizaDate(data.artists.items))
    })
  }

  function handleChange(e) {
    const value = e.target.value.trim()
    setArtista(value)
    if (value.length > 2) {
      searchArtists(artista)
    }
  }

  return (
    <Layout>
      <SubHeader
        breadcrumb={[{ text: 'Home', href: '/' }, { text: 'Busca' }]}
        buttonHref="/"
        heading="Busca de artistas"
      />
      <div className={styles.content}>
        <label htmlFor=""></label>
        <input
          className={styles.inputText}
          type="search"
          placeholder="Busca de artistas"
          name="artista"
          id="artista"
          onChange={e => handleChange(e)}
        />
      </div>
      <div>
        <Results data={data} />
      </div>
    </Layout>
  )
}
function normalizaDate(data) {
  return data.map(item => {
    const { id, name, images } = item
    const image = images.length ? images[0].url : noImage

    return { id, name, image }
  })
}

export default Search
