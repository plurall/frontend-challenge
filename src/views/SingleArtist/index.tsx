import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/imgs/logo.png'
import { Layout } from '../../components'
import { getArtist } from '../../utils'
import { Album, Artist } from '../../utils/types'
import defaultCover from '../../assets/imgs/artist_default_cover.jpg'

const SingleArtist = () => {
  const [artist, setArtist] = useState<Artist>()
  const [albums, setAlbums] = useState<Album[]>()
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
          <S.ArtistHeader>
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
          </S.ArtistHeader>
          <h3>Álbums</h3>
          {albums && <S.ArtistAlbums>
            {albums.map((album, index) => {
              return <S.AlbumItemWrapper key={index}>
                <Link to={`artista/${album.id}`}>
                  <img src={album.images.length > 0 ? album.images[0].url : defaultCover} alt={album.name}/>
                  <h3>{album.name}</h3>
                </Link>
              </S.AlbumItemWrapper>
            })}
          </S.ArtistAlbums>}
        </S.ArtistWrapper>}
      </S.Content>
    </S.Wrapper>
  </Layout>)
}

export default SingleArtist
