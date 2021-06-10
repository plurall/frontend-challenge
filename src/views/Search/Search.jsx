import React, { useEffect, useState } from 'react'

import { Card, SubHeader } from 'components'

import logoSpotify from 'assets/plurall.jpeg'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

const Search = () => {
  const [textFind, setTextFind] = useState('')
  const [artists, setArtists] = useState([])

  const client = new SomosClient()

  const loadArtists = async () => {
    if (textFind.length <= 4) return

    try {
      const { data } = await client.getArtistsSearch(textFind)

      setArtists(data.artists.items)
    } catch (err) {
      client.onError(err)
    }
  }

  const handleChange = event => setTextFind(event.target.value)

  useEffect(() => {
    if (textFind.length > 4) {
      loadArtists()
    }
  }, [textFind])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Busca' }]}
        heading="Buscando Artista"
        buttonHref="/"
      />
      <div className={styles.wrapper}>
        <div className={styles.containerSearch}>
          <img
            src={logoSpotify}
            alt="Logotipo Spotify"
            aria-label="Logo from spotify and plürall"
            loading="lazy"
          />
          <input
            type="text"
            minLength="4"
            placeholder="Digite parte do nome do seu Artista preferido..."
            aria-label="textbox to finding artists"
            className={styles.wrapper}
            onChange={handleChange}
          />
        </div>
        {artists.length === 0 && (
          <div className={styles.containerCard}>
            <h3 aria-label="No artist found">
              Nenhum artista encontrado!
            </h3>
          </div>
        )}
      </div>
      {artists && (
      <section className={styles.containerArtistList}>
        {artists.map(({ id, name, images, genres }) =>
          (<Card
            key={String(id)}
            id={id}
            name={name}
            image={images.length > 0 ? images[0].url : logoSpotify}
            genres={genres}
          />))}
      </section>
      )}
    </>
  )
}

export default Search
