import styled from 'styled-components'

export const ArtistHeader = styled.header`
  display: flex;
  margin: 60px auto;
  align-items: center;
  justify-items: center;
  h2 {
    color: #fff;
    font-size: 3rem;
    font-weight: 900;
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
