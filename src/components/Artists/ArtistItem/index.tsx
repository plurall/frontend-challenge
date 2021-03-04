import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { Artist } from 'utils/types'
import defaultCover from 'assets/imgs/artist_default_cover.jpg'
import { ArtistThumb } from 'components'

type ArtistItemProps = {
  artist: Artist
}

const ArtistItem = ({ artist }: ArtistItemProps) => {
  return (<S.ArtistItemWrapper>
    <Link to={`/artista/${artist.id}`}>
      <ArtistThumb size={160}
                   src={artist.images.length > 0 ? artist.images[0].url : defaultCover}
                   round={false} />
      <h3>{artist.name.substring(0, 60)}{artist.name.length >= 60 && '...' }</h3>
    </Link>
  </S.ArtistItemWrapper>)
}

export default React.memo(ArtistItem)
