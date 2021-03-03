import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #000;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 30px 20px;
  margin: 0 auto;
  font: 16px/14px 'Nunito', sans-serif;
  height: 100%;
  min-height: 100%;
  width: 100%;
`

export const Content = styled.div`
  text-align: center;
  width: 960px;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 100%;
  max-width: 60px;
`
export const ArtistWrapper = styled.div`
`
export const ArtistHeader = styled.header`
  display: flex;
  margin: 60px auto;
  align-items: center;
  justify-items: center;
  h2 {
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 20px;
  }
  span {
    color: #fff;
    display: block;
    margin: 10px 0 0 22px;
    text-align: left;
  }
  img {
    width: 160px;
    border-radius: 50%;
  }
  ul {
    text-align: left;
    margin: 25px 0 0 22px;
    li {
      color: #fff;
      display: inline;
      text-transform: capitalize;
      font-weight: bold;
    }
  }
`

export const ArtistAlbums = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const AlbumItemWrapper = styled.li`
  flex: 0;
  margin: 15px;
  a {
    font-size: 0.8rem;
    h3 {
      color: #fff;
      margin-top: 5px;
      max-width: 100%;
      word-wrap: break-word;
    }
    img {
      max-width: 160px;
    }
    &:hover {
      h3 {
        color: #1fd761;
      }
      img {
        border: 2px solid #1fd761;
      }
    }
  }
`
