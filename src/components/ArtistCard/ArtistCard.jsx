import React from 'react';
import { useHistory } from 'react-router';

import styles from './ArtistCard.module.css'

import noAvatar from '../../assets/noAvatar.jpg'


const ArtistCard = ({ artist }) => {
  const { images, id, name } = artist;

  const imageIndex = Math.floor(Math.random() * images.length);
  const avatarUrl = images.length ? images[imageIndex].url : null;

  const { push } = useHistory();

  const handleClick = e => push(`/artista/${id}`);

  return (
    <div className={styles.artistCard} onClick={handleClick}>
      <span>{name}</span>
      <img src={avatarUrl || noAvatar} alt={`${name}-avatar`} />
    </div>
  )
}

export default ArtistCard
