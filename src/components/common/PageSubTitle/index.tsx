import React from 'react'
import * as S from './styles'

type PageSubTitleProps = {
  title: string
}

const PageSubTitle = ({ title }: PageSubTitleProps) => {
  return (<S.PageSubTitleWrapper>
    <h2>{ title }</h2>
  </S.PageSubTitleWrapper>)
}

export default PageSubTitle
