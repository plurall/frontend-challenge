import styled from 'styled-components'
import { styleVariables as v } from 'assets/style/variables'

export const NavBar = styled.div`
  background-color: ${v.colorPurple};
`

export const Content = styled.div`
  min-height: calc(100vh - ${v.heightNavBar} - ${v.heightFooter});
  display: flex;
  flex-direction: column;
`

export const Footer = styled.div`
  background-color: ${v.colorDarkGray};
  padding: ${v.padding};
`
