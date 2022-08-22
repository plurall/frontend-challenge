import React from 'react'

import { useParams } from 'react-router-dom'

import { Layout } from 'components'

import { AlbumsList, ArtistProfile } from 'containers'

const Artist = () => {
  const { id } = useParams()

  return (
    <Layout>
      <ArtistProfile id={id} />
      <AlbumsList id={id} />
    </Layout>
  )
}

export default Artist
