import React from 'react'
import * as S from './styles'
import defaultCover from '../../../assets/imgs/artist_default_cover.jpg'
import { Album } from '../../../utils/types'
import { format } from 'date-fns'

type AlbumItemProps = {
  album: Album
}

const AlbumItem = ({ album }: AlbumItemProps) => {
  return (<S.AlbumItemWrapper>
      <img src={album.images.length > 0 ? album.images[0].url : defaultCover} alt={album.name}/>
      <h3>{album.name}</h3>
      <span>{format(new Date(album.release_date), 'dd/MM/yyyy')}</span>
  </S.AlbumItemWrapper>)
}

export default AlbumItem
