import React, { useEffect, useLayoutEffect, useState } from 'react'
import { DetailsArtists, Layout, SubHeader, CardAlbums } from 'components'
import { SomosClient } from 'utils'

import styles from './InfoArtist.module.css'
import noImage from 'assets/noImage.png'

const InfoArtist = props => {
  const [resultDetailsArtist, setResultDetailsArtist] = useState({})
  const [resultAlbumsArtist, setResultAlbumsArtist] = useState([])

  const searchDetailsArtists = id => {
    SomosClient.searchDetailsArtists(id).then(
      res => {
        const { name, popularity, images, genres } = res.data
        const image = images.length ? images[0].url : noImage
        const genre = genres.length ? genres : ['Indisponível']

        const details = { name, popularity, image, genre }
        setResultDetailsArtist(details)
      },
      err => {
        console.log(err)
      },
    )
  }

  const searchAlbumsArtist = id => {
    SomosClient.searchAlbumsArtist(id).then(
      res => {
        console.log('ALBUMS', res.data.items)
        const dataAlbums = res.data.items.map(album => {
          const { name, release_date, images, id } = album
          const image = images.length ? images[0].url : noImage

          return { name, release_date, image, id }
        })

        setResultAlbumsArtist(dataAlbums)
      },
      err => {
        console.log(err)
      },
    )
  }

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const { id } = props.match.params

    searchDetailsArtists(id)
    searchAlbumsArtist(id)
  }, [])

  return (
    <Layout>
      <SubHeader
        breadcrumb={[
          { text: 'Home', href: '/' },
          { text: 'Busca', href: '/busca' },
          { text: 'Informações Artista' },
        ]}
        buttonHref="/busca"
        heading={`Informações Artista: ${resultDetailsArtist.name} - Spotify`}
      />
      <DetailsArtists resultDetailsArtist={resultDetailsArtist} />
      <CardAlbums resultAlbumsArtist={resultAlbumsArtist} />
    </Layout>
  )
}

export default InfoArtist
