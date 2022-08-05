import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import imageNotAvailable from '../../images/image-not-available.jpg'

export default function Search() {
  const [artistName, setArtistName] = useState('')
  const [artist, setArtist] = useState([])

  useEffect(() => {
    const searchArtist = async () => {
      if (artistName.length > 4) {
        const client = new SomosClient(artistName)
        const response = await client.getArtists()
        setArtist(response.artists.items)
      }
    }
    searchArtist()
  }, [artistName])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Search' }]}
        heading="Desafio Front-end do Plurall"
      />
      <input
        type="text"
        placeholder="Digite o nome do artista"
        onChange={((e) => setArtistName(e.target.value))}
        className="input-artist-name"
      />
      <div
        className="above-the-card"
      >
        {artist.length !== 0 && artist.map(({ id, images, name }) => (
          <div
            key={id}
            className="card"
          >
            <Link
              to={`/artista/${id}`}
              className="href-name"
            >
              <img
                src={images.length !== 0 ? images[1].url : imageNotAvailable}
                alt="Artist"
                className="picture-album"
              />
              <p className="collection-name">{name}</p>
            </Link>
          </div>
      ))}
      </div>
    </>
  )
}

