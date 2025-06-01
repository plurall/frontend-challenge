import React from 'react'
import * as styles from './ArtistCard.module.scss'

type Props = {
  id: string
  name: string
  imageUrl?: string
}

const ArtistCard = ({ id, name, imageUrl }: Props) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl || '/placeholder.png'} alt={name} className={styles.image} />
      <div className={styles.name}>{name}</div>
    </div>
  )
}

export default ArtistCard
