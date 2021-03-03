import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import defaultCover from '../../../assets/imgs/artist_default_cover.jpg'
import { Album } from '../../../utils/types'

type AlbumItemProps = {
  album: Album
}

const AlbumItem = ({ album }: AlbumItemProps) => {
  return (<S.AlbumItemWrapper>
    <Link to={`artista/${album.id}`}>
      <img src={album.images.length > 0 ? album.images[0].url : defaultCover} alt={album.name}/>
      <h3>{album.name}</h3>
    </Link>
  </S.AlbumItemWrapper>)
}

export default AlbumItem
