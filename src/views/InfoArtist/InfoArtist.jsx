import React, { useEffect, useLayoutEffect, useState } from 'react'
import { DetailsArtists, Layout, SubHeader } from 'components'
import { SomosClient } from 'utils'

import noImage from 'assets/noImage.png'

const InfoArtist = props => {
  const [resultDetailsArtist, setResultDetailsArtist] = useState([])

  const searchDetailsArtists = id => {
    SomosClient.searchDetailsArtists(id).then(
      res => {
        setResultDetailsArtist(res.data)
        const { name, popularity, images, genres } = res.data
        const image = images.length ? images[0].url : noImage
        const genre = genres.length ? genres : ['Sem descrição']

        const details = { name, popularity, image, genre }
        setResultDetailsArtist(details)
      },
      err => {
        console.log(err)
      },
    )
  }

  useLayoutEffect(() => {
    const { id } = props.match.params

    searchDetailsArtists(id)
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
    </Layout>
  )
}

export default InfoArtist
