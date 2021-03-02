import React, { useEffect } from 'react'
import { SubHeader } from '../../components'
import * as S from './styles'
import { getArtists } from '../../utils'

const Index = () => {
  useEffect(() => {
    getArtists().then((result) => console.log(result))
  }, [])

  return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Index' }]}
          heading="Somos Front-end Challange"
        />
        <S.Wrapper>
          <h1>Hi</h1>
        </S.Wrapper>
      </React.Fragment>
  )
}

export default Index
