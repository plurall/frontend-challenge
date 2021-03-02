import { useState, useEffect } from 'react'
import { SomosClient } from 'utils'

export default id => {
  const [artist, setArtist] = useState(null)
  const [albums, setAlbums] = useState(null)

  const client = new SomosClient()

  const loadArtist = async () => {
    try {
      const { data } = await client.getArtists(id)
      setArtist(data)
    } catch (e) {
      console.log(e)
    }
  }

  const loadAlbums = async () => {
    try {
      const {
        data: { items },
      } = await client.getArtistAlbums(id)
      setAlbums(items)
    } catch (e) {
      console.log(e)

    }
  }

  useEffect(() => {
    loadArtist()
    loadAlbums()
  }, [])

  return [artist, albums]
}
