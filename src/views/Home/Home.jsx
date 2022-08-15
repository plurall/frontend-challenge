import React, { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import useUser from 'hooks/useUser'
import styles from './Home.module.scss'

export default function Home() {
  const { setUser } = useUser()

  const [artists, setArtists] = useState()

  const client = new SomosClient()

  async function fetchData() {
    try {
      const resUser = await client.getUser()
      const resArtists = await client.getArtists()

      setUser(resUser)
      setArtists(resArtists)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Desafio Front-end do Plurall"
      />
      <div className={styles.wrapper}>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {artists?.map(artist => (
            <ArtistContainer key={artist.id}>
              <Link to={`artista/${artist.id}`}>
                <ArtistImg src={artist.images[0].url} alt="" />

                <ImgText>{artist.name}</ImgText>
              </Link>
            </ArtistContainer>
          ))}
        </Carousel>
      </div>
    </>
  )
}

const ArtistContainer = styled.div`
  height: 30vw;

  @media (max-width: 1200px) {
    height: 60vh;
  }
`

const ArtistImg = styled.img`
  height: 30vw;
  object-fit: contain;
  border-radius: 10px;

  @media (max-width: 1200px) {
    height: 60vh;
  }
`

const ImgText = styled.p`
  margin-top: -55px;
  color: white;
  font-size: 30px;

  font-family: sans-serif;
  font-weight: 700;
`
