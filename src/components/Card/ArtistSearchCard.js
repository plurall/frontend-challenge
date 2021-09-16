import React, { useContext } from 'react'
import styles from './Card.module.css'
import Card from './Card';
const ArtistSearchCard = (artist) => {
  if (artist.length === 0) {
    return (<p className={styles.notFound}>Artista não encontrado </p>)
  } else {
    return (
      <div>
        <p className={styles.results}>Melhor resultado</p>
        {Card(artist, 'Artista')}
      </div>
    )
  }
}

export default ArtistSearchCard