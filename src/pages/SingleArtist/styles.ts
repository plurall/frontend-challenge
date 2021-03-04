import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #000;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  padding: 30px 20px;
  margin: 0 auto;
  font: 16px/14px 'Roboto', sans-serif;
  height: 100%;
  min-height: 100%;
  width: 100%;
`
export const TopBar = styled.div`
  align-items: center;
  justify-content: center;
  color: #fff;
  display: flex;
  a {
    display: block;
    margin-right: auto;
    color: #fff;
    font-size: 3rem;
  }
`

export const Content = styled.div`
  text-align: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

export const Logo = styled.img`
  margin: 0 auto 0 -42px;
  display: block;
  width: 100%;
  max-width: 60px;

  @media(max-width: 800px) {
    margin: 0;
    max-width: 45px;
  }
`

export const Loading = styled.img`
  margin-top: 120px;
`

export const ArtistWrapper = styled.div`
`
