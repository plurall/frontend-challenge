import React from 'react'
import { Layout } from '../../components'
import * as S from './styles'
import logo from '../../assets/imgs/logo.png'

const Home = () => {
  return (
      <Layout>
        <S.Wrapper>
          <S.Content>
            <S.Logo src={logo} alt={'Logo do Spotify'}/>
            <div>
              <S.SearchLink to={'/busca'} >Buscar Artistas</S.SearchLink>
            </div>
          </S.Content>
        </S.Wrapper>
      </Layout>
  )
}

export default Home
