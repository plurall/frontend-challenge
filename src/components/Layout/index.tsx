import React from 'react'
import { RouteProps } from 'react-router-dom'
import { getToken, setToken } from 'utils'
import * as S from './styles'
// @ts-ignore
import { Footer } from 'plurall-footer'
// @ts-ignore
import NavBar from 'plurall-header'

const Layout = ({ children }: RouteProps) => {
  const handleLogout = (path: any) => {
    setToken('')
    window.location = path
  }

  return (
      <>
        <S.NavBar>
          <NavBar
            data={{
              menu: { items: [{ name: 'Início', slug: 'account', id: 0 }] }
            }}
            apiUrl=""
            logout={handleLogout}
            service="reader"
            userToken={getToken()}
          />
        </S.NavBar>
        <S.Content>{children}</S.Content>
        <S.Footer>
          <Footer />
        </S.Footer>
      </>
  )
}

export default Layout
