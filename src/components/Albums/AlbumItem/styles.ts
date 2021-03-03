import styled from 'styled-components'

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
