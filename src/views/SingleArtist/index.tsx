import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/imgs/logo.png'
import { Layout } from '../../components'
import { getArtist } from '../../utils'
import { Album, Artist } from '../../utils/types'
import ArtistHeader from '../../components/Artists/ArtistHeader'
import AlbumList from '../../components/Albums/AlbumList'
import PageSubTitle from '../../components/common/PageSubTitle'

const SingleArtist = () => {
  const [artist, setArtist] = useState<Artist>()
  const [albums, setAlbums] = useState<Album[]>([])
  const history = useHistory()

  useEffect(() => {
    const arrPathNames = history.location.pathname.split('/')
    const artistId = arrPathNames[arrPathNames.length - 1]

    getArtist(artistId).then(result => {
      if (result) {
        setArtist(result.artist)
        setAlbums(result.albums.items)
      }
    })
  }, [history])

  return (<Layout>
    <S.Wrapper>
      <S.Content>
        <S.Logo src={logo} />
        {artist && <S.ArtistWrapper>
          <ArtistHeader artist={artist} />
          <PageSubTitle title={'Álbuns'} />
          <AlbumList albums={albums} />
        </S.ArtistWrapper>}
      </S.Content>
    </S.Wrapper>
  </Layout>)
}

export default SingleArtist
