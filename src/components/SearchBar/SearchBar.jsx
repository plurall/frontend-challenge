import React, { useEffect, useState } from 'react'
import SomosClient from '../../utils/client'
import noImage from '../../assets/noImage.png'

import styles from './SearchBar.module.css'

function SearchBar() {
  const [results, setResults] = useState([])
  const [emptyReturn, setEmptyReturn] = useState(false)

  useEffect(() => {
    searchArtists('Michael Jackson')
  }, [])

  function searchArtists(query) {
    SomosClient.searchArtists(query).then(
      res => {
        console.log('respostas', res)
        const artists = res.data.artists.items.map(artist => {
          const { id, name, images } = artist
          const image = images.length ? images[0].url : noImage

          return { id, name, image }
        })

        console.log('artists', artists)
        setResults(artists)

        if (!artists.length) {
          setEmptyReturn(true)
        }
      },
      err => {
        console.log(err)
      },
    )
  }

  function viewArtists(id) {
    console.log('id Artist', id)
  }

  return (
    <>
      {results.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.id}</p>
          <img src={item.image} alt="imagem" width="100px" />
          <button onClick={() => viewArtists(item.id)}>VER</button>
        </div>
      ))}
      {emptyReturn ? <p>Sua busca não tem resultados</p> : ''}
    </>
  )
}

export default SearchBar
