import React from 'react';

import styles from './ArtistCard.module.css';

const ArtistCard = ({ artist }) => {
  console.log(artist.image)
  return (
    <div className={` ${styles.card} animate__animated animate__fadeInUp`}>
      <div className={ styles.imgContainer}>
        <img src={artist.image} alt={`${artist.name} profile image`} />
      </div>
      <span>{ artist.name }</span>
    </div>
  )
}

export default ArtistCard;