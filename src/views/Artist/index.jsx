import React, { useState, useEffect } from 'react'
import { Layout } from 'components'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { SomosClient } from 'utils'

export default function Artist() {
  const [artist, setArtist] = useState()

  const { id } = useParams()

  const client = new SomosClient()

  async function fetchData() {
    try {
      const res = await client.getOneArtist(id)

      console.log(res)
      console.log(artist)

      setArtist(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()

    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Container>
        <ArtistImg src={artist?.images[0].url} />

        <FollowButton>Follow</FollowButton>
      </Container>
    </Layout>
  )
}

// Nome
// Popularidade
// Foto
// Lista de gêneros
// Lista de 10 albuns, contendo: Imagem, nome do album e data de lançamento.

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
  padding: 50px 20px;
`

const ArtistImg = styled.img`
  height: 20vw;
  object-fit: contain;
  border-radius: 100000000px;

  @media (max-width: 1300px) {
    height: 40vw;
  }
  @media (max-width: 800px) {
    height: 50vw;
  }
`

const FollowButton = styled.button`
  display: flex;
  border: none;
  border-radius: 30px;
  background-color: #65e36f;
  width: fit-content;
  height: fit-content;
  padding: 13px 45px;

  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: black;
  cursor: pointer;
`
