import React from 'react'
import * as S from './styles'

type ArtistThumbProps = {
  size: number
  src: string
  round: boolean
}

const ArtistThumb = (props: ArtistThumbProps) => {
  return <S.Thumbnail {...props} />
}

export default ArtistThumb
