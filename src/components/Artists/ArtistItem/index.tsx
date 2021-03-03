import React from 'react'
import { Artist } from '../../../utils/types'
import { Link } from 'react-router-dom'
import * as S from './styles'
import defaultCover from '../../../assets/imgs/artist_default_cover.jpg'

type ArtistItemProps = {
  artist: Artist
}

const ArtistItem = ({ artist }: ArtistItemProps) => {
  return (<S.ArtistItemWrapper>
    <Link to={`artista/${artist.id}`}>
      <img src={artist.images.length > 0 ? artist.images[0].url : defaultCover} alt={artist.name}/>
      <h3>{artist.name}</h3>
    </Link>
  </S.ArtistItemWrapper>)
}

export default ArtistItem
