import React, { useEffect, useState } from 'react'

import { Album, SubHeader } from 'components'

import logoPlural from 'assets/plurall.jpeg'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'

const Artist = (props) => {
  const [artistInfo, setArtistInfo] = useState({})
  const [albuns, setAlbuns] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = props.match.params
  const client = new SomosClient()

  useEffect(() => {
    async function loadInfo() {
      try {
        const { data } = await client.getArtist(id)

        setArtistInfo(data)
      } catch (err) {
        client.onError(err)
      }
    }

    async function loadAlbuns() {
      try {
        const { data } = await client.getArtistAlbums(id)

        setAlbuns(data.items)
      } catch (err) {
        client.onError(err)
      }
    }

    loadInfo()
    loadAlbuns()
    setLoading(false)
  }, [])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: artistInfo.name || 'Teste' }]}
        heading={`Informações do artista ${artistInfo.name}`}
        buttonHref="/search"
      />
      {loading && <h1>Carregando, aguarde...</h1>}
      {artistInfo && !loading && (
        <>
          <main
            aria-label={`Information from ${artistInfo.name}`}
            className={styles.container}
          >
            {artistInfo.images &&
              <img
                src={artistInfo.images
                  ? artistInfo.images[0].url
                  : logoPlural}
                alt={artistInfo.name}
                aria-label="Principal picture"
                decoding="async"
                loading="lazy"
              />
            }
            <div className={styles.contentTitle}>
              <p
                className={styles.popularity}
                aria-label={`Its popularity is ${artistInfo.popularity || 0}`}
              >
               Sua popularidade está em {artistInfo.popularity || 0}
              </p>
              <h2
                className={styles.title}
                aria-label={`This is your favorite artist: ${artistInfo.name}`}
              >
               Esse é seu artista favorito: {artistInfo.name}
              </h2>
            </div>

            <aside className={styles.genres}>
              <h3 aria-label="This artist's musical genres">
                O gêneros desse artista são:
              </h3>
              <p
                aria-label="The list of music genres"
              >
                {artistInfo.genres
                  ? artistInfo.genres.join(', ')
                  : 'Nâo existe um cadastro de gênero musical para esse artista'}
              </p>
            </aside>
          </main>

          <article className={styles.albumContainer}>
            <h2>Esse é o top {albuns.length} de albuns</h2>
            <ul>
              {albuns && albuns.map(album =>
                (<Album
                  key={String(album.id)}
                  image={album.images
                    ? album.images[0].url
                    : logoPlural}
                  name={album.name}
                  releaseDate={album.release_date}
                  artistName={artistInfo.name}
                />),
              )}
            </ul>
          </article>
        </>
      )}
    </>
  )
}

export default Artist
