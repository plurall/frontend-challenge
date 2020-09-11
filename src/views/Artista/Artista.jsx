import React from 'react'
import moment from 'moment'
import { useParams, Link } from 'react-router-dom'

import ArrowLeft from 'assets/images/left-arrow.svg'

import { Layout } from 'components'

import { useArtist } from 'hooks'
import styles from './Artista.module.css'

const Artis = () => {
  const { id } = useParams()
  const [artist, albums] = useArtist(id)

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.artistContent}>
          <Link to="/busca">
            <img
              className={styles.iconBack}
              src={ArrowLeft}
              alt="link return"
            />
          </Link>
          {artist && (
            <>
              {artist.images.length > 0 && (
                <img
                  className={styles.artistCover}
                  src={artist.images[0].url}
                  alt={artist.name}
                />
              )}
              <div className={styles.artistInfo}>
                <h1>{artist.name}</h1>
                <h5>Popularidade: {artist.popularity}</h5>
                <ul className={styles.genreList}>
                  {artist.genres.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <ul className={styles.albumList}>
          {albums.map(({ id, name, images, release_date }) => (
            <li key={id}>
              {images && images.length > 0 && (
                <img src={images[0].url} alt={name} />
              )}
              <p>{name}</p>
              <span>{moment(release_date).format('DD/MM/y')}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Artis
