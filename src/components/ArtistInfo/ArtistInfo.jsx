import { React, useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import imageNotAvailable from '../../images/image-not-available.jpg'

export default function ArtistInfo() {
  const [artist, setArtist] = useState({})
  const [artistAlbums, setArtistAlbums] = useState([])

  const { params } = useRouteMatch()

  useEffect(() => {
    const searchArtist = async () => {
      const client = new SomosClient(params.id)
      const response = await client.getArtistById()
      const responseAlbum = await client.getAlbums()
      setArtist(response)
      setArtistAlbums(responseAlbum.items)
    }
    searchArtist()
  }, [])


  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Artist Info' }]}
        heading="Desafio Front-end do Plurall"
      />
      <div className="album-container">
        {Object.keys(artist).length !== 0 &&
          <div className="main-album">
            <div className="img-album">
              <img
                src={artist.images.length !== 0 ? artist.images[1].url : imageNotAvailable}
                alt="Artist"
              />
            </div>
            <div className="text-album">
              <p>{`Nome do artista: ${artist.name}`}</p>
              <p>{`Popularidade: ${artist.popularity}`}</p>
              <p>{artist.genres.length !== 0 ? `Gênero(s): ${artist.genres}` : 'Gênero(s): Não encontrado'}</p>
            </div>
          </div>}
        <div className="above-the-card">
          {artistAlbums.length !== 0 && artistAlbums.map(({ id, images, name, release_date: releaseDate }) => (
            <div
              key={id}
              className="card"
            >
              <img
                src={images.length !== 0 ? images[1].url : imageNotAvailable}
                alt="Album"
                className="picture-album"
              />
              <p className="collection-name">{`Nome do álbum: ${name}`}</p>
              <p className="collection-name">{`Data de lançamento: ${releaseDate.split('-').reverse().join('/')}`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
