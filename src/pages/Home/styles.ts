import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  max-width: 100px;
`
export const SearchLink = styled(Link)`
  display: inline-block;
  background: #000;
  border: 3px solid #1fd761 ;
  margin-top: 15px;
  padding: 15px 25px;
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.2s;
  &:hover {
    background: #1fd761;
    border: 3px solid #000 ;
    color: #000;
    transition: all 0.2s
  }
`
