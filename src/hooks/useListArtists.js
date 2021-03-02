import { useState, useEffect } from 'react'
import { SomosClient } from 'utils'

export default () => {
  const client = new SomosClient()
  const [valueArtist, setValueArtist] = useState('')
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetch, setFetch] = useState(false)


  const loadArtists = async () => {
    try {
      setLoading(true)
      const { data } = await client.getArtistsSearch(valueArtist)
      setFetch(true)
      setArtists(data.artists.items)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
      setFetch(false)
    }
  }

  useEffect(() => {
    if (valueArtist.length > 3) {
      loadArtists()
    }
  }, [valueArtist])

  return [artists, loading, fetch, setValueArtist]
}
