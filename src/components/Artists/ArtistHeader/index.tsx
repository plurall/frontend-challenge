import React from 'react'
import * as S from './styles'
import { FaStar } from 'react-icons/fa'
import defaultCover from '../../../assets/imgs/artist_default_cover.jpg'
import { Artist } from '../../../utils/types'
import ArtistThumb from '../ArtistThumb'

type ArtistHeaderProps = {
  artist: Artist
}

const ArtistHeader = ({ artist }: ArtistHeaderProps) => {
  return (<S.ArtistHeader>
    <ArtistThumb
      size={160}
      src={artist.images.length > 0 ? artist.images[0].url : defaultCover}
      round={true}
    />
    <div style={{ width: '100%' }}>
      <S.ArtistHeaderTitle>
        <h2>{artist.name}</h2>
        <S.ArtistPopularity>
          <span><FaStar /> <b>{artist.popularity}%</b></span>
        </S.ArtistPopularity>
      </S.ArtistHeaderTitle>
      <S.ArtistGenreList>
        {artist.genres.map((genre, index) => {
          return <li key={index}>{genre}</li>
        })}
      </S.ArtistGenreList>
    </div>
  </S.ArtistHeader>)
}

export default ArtistHeader
