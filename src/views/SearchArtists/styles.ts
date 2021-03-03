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
`

export const Logo = styled.img`
  width: 100%;
  max-width: 60px;
`

export const SearchWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  input {
    font-size: 0.9rem;
    border-radius: 20px;
    margin: 20px 0;
    padding-left: 20px;
    outline: none;
    height: 40px;
    width: 100%;
  }
`
