import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import userDefault from "../../assets/icons/user-default.svg"

import {
  wrapper,
  container,
  welcome_text as welcomoText,
  user_heading as userHeading,
  button_go_to as buttonGoTo,
} from './Home.module.css'

const Home = () => {
  const client = new SomosClient()
  const [user, setUser] = useState({name: '', image: ''})

  const onLoadUser = async () => {
    try {
      const response = await client.getUser()
      setUser({
        name: response.data.display_name || "",
        image: response.data.images ? response.data.images[0].url : userDefault
      })
    } catch (error) {
      console.log(error)
    }
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
          <img src={user.image} alt="foto do usuário" />
          <strong className={welcomoText}>Seja bem vindo</strong>
          <h1 className={userHeading}>{user.name}</h1>

          <Link className={buttonGoTo} to="/search-artists">
            Buscar artistas
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
