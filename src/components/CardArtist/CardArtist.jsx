import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './CardArtist.module.css'

const CardArtist = ({ artist_id, image, name, popularity, genres }) => {
  return (
    <section className={styles.card}>
      <Link to={`/artista/${artist_id}`} alt={`Imagem do artista: ${name}`} className={styles.link}>
        <div className={styles.imagebox}>
          {image && (
            <img
              alt={`Imagem do artista: ${name}`}
              className={styles.image}
              src={image || null}
            />
          )}          
        </div>
        <div className={styles.content}>
          <p className={styles.name}>{name}</p>
          {genres && (
            <div className={styles.genres}>
              {genres.map(genre => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
          )}
          <div className={styles.popularities}>
            <p>Popularidade:</p> <div className={styles.popularity}><span style={{width: `${popularity}%`}}></span></div>
          </div>
        </div>
      </Link>
    </section>
  )
}
CardArtist.propTypes = {
  artist_id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
}

export default CardArtist
