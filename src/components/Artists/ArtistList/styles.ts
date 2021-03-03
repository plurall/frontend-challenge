import styled from 'styled-components'

export const ListArtistsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media(max-width: 800px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`
