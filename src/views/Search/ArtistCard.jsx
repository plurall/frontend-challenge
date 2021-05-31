import React from 'react';

import { StyleArtistCard } from './styles';
import noAvatar from '../../assets/noAvatar.jpg'
import { useHistory } from 'react-router';


const ArtistCard = ({ artist }) => {
  const { images, id, name } = artist;

  const imageIndex = Math.floor(Math.random() * images.length);
  const avatarUrl = images.length ? images[imageIndex].url : null;

  const { push } = useHistory();

  const handleClick = e => push(`/artista/${id}`);

  return (
    <StyleArtistCard onClick={handleClick}>
      <span>{name}</span>
      <img src={avatarUrl || noAvatar} alt={`${name}-avatar`} />
    </StyleArtistCard>
  )
}

export default ArtistCard
