/* eslint-disable no-alert */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { ContentPage, Spin, SubHeader } from 'components'
import { SomosClient } from 'utils'

import noImage from '../../assets/noImage.png'

import styles from './Search.module.css'

const Search = () => {
  const client = new SomosClient()

  const [artists, setArtists] = useState({ items: [], next: '' })
  const [loading, setLoading] = useState(false)
  const [timerCallOnSearch, setTimerCallOnSearch] = useState()

  const searchArtists = async value => {
    if (timerCallOnSearch) {
      clearTimeout(timerCallOnSearch)
    }
    const newTimer = setTimeout(async () => {
      try {
        setLoading(true)
        const response = await client.getArtists(value)

        const artistsItems = response.artists.items.map(item => {
          const { name, id, images } = item
          const image = images.length ? images[0].url : noImage

          return { name, id, image }
        })

        setArtists({ items: artistsItems, next: response.artists.next })

        setLoading(false)
      } catch (error) {
        alert('Não foi possivel realizar a busca de artista')
        setLoading(false)
      }
    }, 1000)
    setTimerCallOnSearch(newTimer)
  }

  const handleChangeInput = event => {
    event.preventDefault()
    if (event.target.value.length > 4) {
      searchArtists(event.target.value)
    }
  }

  return (
    <>
      <SubHeader
        buttonHref="/"
        breadcrumb={[{ text: 'Home', href: '/' }, { text: 'Busca' }]}
        heading="Busca de artistas"
      />
      <ContentPage>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Buscar artistas"
          onChange={handleChangeInput}
        />
        <Spin spinning={loading}>
          <div className={styles.containerCard}>
            {artists.items &&
              artists.items.map(artist => (
                <Link key={artist.id} to={`/artista/${artist.id}`}>
                  <figure className={styles.figureContainer}>
                    <img
                      src={artist.image}
                      alt={artist.name}
                      width="160px"
                      height="160px"
                    />
                    <figcaption>{artist.name}</figcaption>
                  </figure>
                </Link>
              ))}
          </div>
        </Spin>
      </ContentPage>
    </>
  )
}

export default Search
