import React, { useEffect, useState } from 'react'
import { DetailsArtists, Layout, SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './InfoArtist.module.css'

const InfoArtist = props => {
  const [idArtist, setIdArtist] = useState('')

  const searchDetailsArtists = id => {
    SomosClient.searchDetailsArtists(id).then(res =>
      console.log('searchDetailsArtists', res),
    )
  }

  useEffect(() => {
    const { id } = props.match.params
    setIdArtist(id)

    searchDetailsArtists(id)
  }, [])

  return (
    <Layout>
      <SubHeader
        breadcrumb={[
          { text: 'Home', href: '/' },
          { text: 'Informações Artista' },
        ]}
        buttonHref="/busca"
        heading="Informações Artista: FULANO - Spotify"
      />
      <div className={styles.wrapper}>
        <p>Detalhes Artista</p>
        <p>ID: {idArtist}</p>
      </div>
    </Layout>
  )
}

export default InfoArtist
