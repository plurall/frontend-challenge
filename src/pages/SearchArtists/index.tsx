import React, { useState } from 'react'
import { Layout } from '../../components'
import * as S from './styles'
import logo from '../../assets/imgs/logo.png'
import { Artist } from '../../utils/types'
import ArtistList from '../../components/Artists/ArtistList'
import SearchInput from './SearchInput'

const SearchArtists = () => {
  const [artists, setArtists] = useState<Artist[]>([])

  return (
    <Layout>
      <S.Wrapper>
        <S.Content>
          <S.Logo src={logo} />
          <SearchInput setArtists={setArtists} />
          <ArtistList artists={artists} />
        </S.Content>
      </S.Wrapper>
    </Layout>
  )
}

export default SearchArtists
