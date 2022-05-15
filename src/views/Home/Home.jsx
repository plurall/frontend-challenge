import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import {
  wrapper,
  container,
  welcome_text as welcomoText,
  user_heading as userHeading,
  button_go_to as buttonGoTo,
} from './Home.module.css'

const Home = () => {
  const client = new SomosClient()
  const [username, setUsername] = useState('')

  const onLoadUser = async () => {
    const response = await client.getUser()
    setUsername(response.data.display_name)
  }

  useEffect(() => {
    onLoadUser()
  }, [])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Desafio Front-end do Plurall"
      />
      <div className={wrapper}>
        <div className={container}>
          <strong className={welcomoText}>Seja bem vindo</strong>
          <h1 className={userHeading}>{username}</h1>

          <Link className={buttonGoTo} to="/search-artists">
            Buscar artistas
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
