import { FadeWrapper } from 'components/FadeWrapper'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ArtistCard.module.css'

const ArtistCard = ({ artistId, artistName, artistImage }) => {
  return (
    <FadeWrapper>
      <div className={styles.artistCard}>
        <div
          className={styles.artistImage}
          style={{
            backgroundImage: artistImage
              ? `url("${artistImage}")`
              : 'url("https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        <h2>{artistName}</h2>
        <Link to={`/artist?artistId=${artistId}`}>
          <button type="button">
            <span className={styles.textButton}>Ver detalhes</span>
          </button>
        </Link>
      </div>
    </FadeWrapper>
  )
}

export default ArtistCard
