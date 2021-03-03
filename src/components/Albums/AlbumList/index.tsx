import React from 'react'
import * as S from './styles'
import { Album } from '../../../utils/types'
import AlbumItem from '../AlbumItem'

type AlbumListProps = {
  albums: Album[]
}

const AlbumList = ({ albums }: AlbumListProps) => {
  return (<S.AlbumListWrapper>
    {albums.map(album => {
      return <AlbumItem key={album.id} album={album} />
    })}
  </S.AlbumListWrapper>)
}

export default AlbumList
