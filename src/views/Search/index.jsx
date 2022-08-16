import { Layout } from 'components'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SomosClient } from 'utils'

export default function Search() {
  const [searchUsers, setSearchUsers] = useState([])

  const client = new SomosClient()

  async function onInputChange(value) {
    let response

    try {
      if (value.length >= 4) {
        setTimeout(async () => {
          response = await client.searchArtists(value)

          console.log(response.artists.items)
          setSearchUsers(response.artists.items)
        }, 100)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Container>
        <Input
          onChange={e => onInputChange(e.target.value)}
          minLength={3}
          debounceTimeout={300}
        />

        <ArtistsContainer>
          {searchUsers?.map(artist => (
            <Link to={`/artista/${artist.id}`}>
              <Artist key={artist?.id}>
                <img src={artist?.images[0]?.url} alt="" />

                <p>{artist.name}</p>
              </Artist>
            </Link>
          ))}
        </ArtistsContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  p {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: black;
  }
`

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 0;
  width: 563px;
  height: 50px;
  margin: 20px auto;
  padding: 0 10px;

  background: #ffffff;
  border-radius: 8px;
  z-index: 2;
`

const ArtistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;

  p:nth-child(3) {
    color: #aaa;
    font-weight: 400;
    font-size: 20px;
  }
`

const Artist = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  padding: 10px;
  border-bottom: 0.5px solid #ccc;

  cursor: pointer;
  gap: 20px;

  :hover {
    background-color: #eee;
  }

  img {
    height: 10vw;
    object-fit: contain;

    @media (max-width: 900px) {
      height: 20vw;
    }
  }
`
