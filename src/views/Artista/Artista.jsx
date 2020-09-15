import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { getToken } from '../../utils/'

const Artista = ({ match }) => {
  const { params } = match
  const { id } = params

  const [artist, setArtist] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/artists/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )

      setArtist(response.data)
    }

    fetch()
  }, [])

  if (!artist) return <p> Carregando... </p>

  return (
    <div>
      <h1> {artist.name} </h1>
    </div>
  )
}

export default Artista
