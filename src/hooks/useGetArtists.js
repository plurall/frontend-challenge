import { useState, useEffect } from 'react'

import { SomosClient } from 'utils'

export default term => {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getArtists = async () => {
    const client = new SomosClient()

    try {
      setLoading(true)
      const { data } = await client.getArtistBySearch(term)
      setArtists(data.artists.items)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (term && term.length >= 4) {
      getArtists()
    }
  }, [term])

  return [artists, loading, error]
}
