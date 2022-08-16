import React, { useState, useEffect } from 'react'
import { Layout } from 'components'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { SomosClient } from 'utils'
import { Bounce } from 'react-activity'

export default function Artist() {
  const [artist, setArtist] = useState()
  const [albums, setAlbums] = useState()

  const { id } = useParams()

  const client = new SomosClient()

  function formatDate(date) {
    const dateArr = date?.split('-')

    return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`
  }

  async function fetchData() {
    try {
      const resArtist = await client.getOneArtist(id)
      const resAlbums = await client.getArtistAlbum(id)

      setArtist(resArtist)
      setAlbums(resAlbums)
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
        {artist ? (
          <PhotoContainer>
            <ArtistImg src={artist?.images[0].url} />

            <p>{artist?.name}</p>

            <FollowButton>Follow</FollowButton>

            <p>Popularidade: {artist?.popularity}</p>
          </PhotoContainer>
        ) : (
          <Bounce style={{ marginTop: 100 }} />
        )}

        <GenreContainer>
          {artist?.genres.map(genre => (
            <Genre key={Math.random(10000)}>
              <p>{genre}</p>
            </Genre>
          ))}
        </GenreContainer>

        <AlbumsContainer>
          {albums?.items.map(album => (
            <Album key={album.id}>
              <img src={album.images[0].url} alt="" />

              <p>{album.name}</p>

              <p>{formatDate(album.release_date)}</p>
            </Album>
          ))}
        </AlbumsContainer>
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

  p {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: black;
  }
`

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  gap: 20px;
  width: 100vw;

  background-color: #eee;

  p:nth-child(4) {
    color: #aaa;
    font-weight: 400;
    font-size: 25px;
  }
`

const GenreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  gap: 20px;
`

const Genre = styled.div`
  background-color: #aaa;
  padding: 12px 25px;
  border-radius: 100000px;
  cursor: pointer;

  :hover {
    background-color: #ccc;
  }
`

const AlbumsContainer = styled.div`
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

const Album = styled.div`
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

const ArtistImg = styled.img`
  height: 20vw;
  width: 20vw;
  object-fit: cover;
  border-radius: 100000000px;
  filter: blur(0);
  -webkit-filter: blur(0);

  @media (max-width: 1300px) {
    width: 40vw;
    height: 40vw;
  }
  @media (max-width: 800px) {
    width: 50vw;
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

  :hover {
    background-color: #65e36f50;
  }
`
