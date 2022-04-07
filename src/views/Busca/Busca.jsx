/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { SubHeader, InputBusca, ListaArtista } from 'components'
import { SomosClient } from 'utils'
import styles from './Busca.module.css'

const Busca = () => {
  const api = new SomosClient()
  const [artists, setArtists] = useState([])

  const buscaArtistaApi = async event => {
    const response = await api.getArtists(event)
    if (!response.artists) return
    setArtists(response.artists.items)
  }

  const buscarArtista = texto => {
    buscaArtistaApi(texto)
  }

  return (
    <React.Fragment>
      <SubHeader
        buttonHref="/"
        breadcrumb={[{ text: 'Busca' }]}
        heading="Somos Front-end Challange"
      />

      <div className={styles.wrapper}>
        <InputBusca buscarArtista={buscarArtista} />
        <ListaArtista artistas={artists} />
      </div>
    </React.Fragment>
  )
}

export default Busca
