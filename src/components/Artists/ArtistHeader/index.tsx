import React from 'react'
import * as S from './styles'
import defaultCover from '../../../assets/imgs/artist_default_cover.jpg'
import { Artist } from '../../../utils/types'

type ArtistHeaderProps = {
  artist: Artist
}

const ArtistHeader = ({ artist }: ArtistHeaderProps) => {
  return (<S.ArtistHeader>
    <img src={artist.images.length > 0 ? artist.images[0].url : defaultCover} alt={artist.name}/>
    <div>
      <h2>{artist.name}</h2>
      <ul>
        {artist.genres.map((genre, index) => {
          return <li key={index}>{genre}, </li>
        })}
      </ul>
      <span>Popularidade: <b>{artist.popularity}%</b></span>
    </div>
  </S.ArtistHeader>)
}

export default ArtistHeader
