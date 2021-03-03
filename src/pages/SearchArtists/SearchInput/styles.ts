import styled from 'styled-components'

export const SearchWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  input {
    border: none;
    outline: none;
    font-size: 1rem;
    border-radius: 30px;
    margin: 40px 0 20px;
    padding: 0 20px 0 45px;
    outline: none;
    height: 45px;
    width: 100%;
    &:focus {
      border: 2px solid #15a248;
    }
  }
  svg {
    position: absolute;
    color: #000;
    opacity: 0.5;
    top: 54px;
    left: 20px;
  }

  @media(max-width: 800px) {
    input {
      font-size: 1.2rem;
    }
  }
`
