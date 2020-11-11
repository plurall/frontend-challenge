import React, { useState, useEffect } from 'react'

import { SomosClient } from 'utils'

import { Layout } from 'components'
import { Artist } from 'views'

const client = new SomosClient()

const ArtistPage = ({match}) => {

  const [artist, setArtist] = useState('')
  const [albums, setAlbums] = useState('')

  const artistId = match.params.id

  useEffect(() => {
    async function fetchData() {
      const responseArtist = await client.getArtist(artistId)
      setArtist(responseArtist)
      
      const responseAlbums = await client.getArtistAlbums(artistId)
      setAlbums(responseAlbums)      
    }
    fetchData();
  }, [artistId]);

  return(
    <Layout>
      <Artist artist={artist} albums={albums} />
    </Layout>
  )
}

export default ArtistPage
