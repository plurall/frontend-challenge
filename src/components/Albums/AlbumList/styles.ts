import styled from 'styled-components'

export const AlbumListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media(max-width: 800px) {
    flex-wrap: nowrap;
    flex-direction: column;
    img {
      width: 100%;
      max-width: 100%;
    }
  }
`
