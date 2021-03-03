import React from 'react'
import { Artist } from '../../../utils/types'
import ArtistItem from '../ArtistItem'
import * as S from './styles'

type ArtistListProps = {
  artists: Artist[]
}

const ArtistList = ({ artists }: ArtistListProps) => {
  return (<S.ListArtistsWrapper>
    {artists.map((artist) => (
      <ArtistItem key={artist.id} artist={artist} />
    ))}
  </S.ListArtistsWrapper>)
}

export default ArtistList
