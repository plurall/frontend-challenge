import styled from 'styled-components'

export const ArtistItemWrapper = styled.li`
  flex: 0;
  margin: 15px;
  a {
    font-size: 0.8rem;
    h3 {
      color: #fff;
      font-family: 'Roboto', sans-serif;
      margin-top: 8px;
      max-width: 100%;
      word-wrap: break-word;
      transition: all 0.5s;
    }
    div {
      transition: all 0.5s;
    }
    &:hover {
      h3 {
        color: #1fd761;
        transition: all 0.5s;
      }
      div {
        border: 3px solid #1fd761;
        background-size: 110%;
        background-position: 50%;
        transition: all 0.5s;
      }
    }
  }

  @media(max-width: 800px) {
    flex-grow: 1;
    div {
      width: 100%;
      height: 260px;
    }
    h3 {
      font-size: 1.4rem;
      margin-top: 10px !important;
      line-height: 1.2;
    }
  }
`
