import { useState, useEffect } from 'react'

import { SomosClient } from 'utils'

export default id => {
  const [artist, setArtist] = useState(null)
  const [albums, setAlbums] = useState([])
  const [error, setError] = useState(null)

  const client = new SomosClient()

  const getArtist = async () => {
    try {
      const { data } = await client.getArtist(id)
      setArtist(data)
    } catch (e) {
      setError(e)
    }
  }

  const getAlbums = async () => {
    try {
      const {
        data: { items },
      } = await client.getArtistAlbums(id)
      setAlbums(items)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    getArtist()
    getAlbums()
  }, [])

  return [artist, albums, error]
}
