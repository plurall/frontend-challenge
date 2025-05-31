import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './ListaArtistas.module.scss'
import { IArtistaItem } from 'interfaces'

const ListaArtistas: React.FC<IArtistaItem> = ({ id, name, type, imageUrl }) => {
  return (
    <Link to={`/artista/${id}`} className={styles.artistCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl || '/default-artist.png'} alt={name} className={styles.artistImage} />
      </div>
      <div className={styles.artistInfo}>
        <h3 className={styles.artistName}>{name}</h3>
        <p className={styles.artistType}>{type}</p>
      </div>
    </Link>
  )
}

export default ListaArtistas
