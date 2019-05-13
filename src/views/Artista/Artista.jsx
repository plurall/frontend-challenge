import React from 'react'

import { SubHeader, BoxInfo } from 'components'
import { SomosClient } from 'utils'

import styles from './Artista.module.css'

class Artista extends React.Component {
  state = {
    id_artista: null,
    showBox: false,
    artista: null,
    album: null
  }

  client = new SomosClient()

  componentDidMount() {
    let path = window.location.pathname
    let id_artista = path.substr(path.lastIndexOf('/') + 1)
    this.setState({ id_artista: id_artista }, this.getInfo(id_artista))
  }

  getInfo(id) {
   this.getInfoArtista(id)
   this.getInfoAlbum(id)

  }

  async getInfoArtista(id) {
    const response = await this.client.getInfoArtista(id)
    this.setState({ artista: response})
  }

  async getInfoAlbum(id) {
    const response = await this.client.getArtistaAlbums(id)
    this.setState({ album: response.items, showBox: true})
  }

  render() {
    const { artista, album, showBox } = this.state;
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Artista' }]}
          heading="Somos Front-end Challange"
        />
        {showBox && <BoxInfo artista={artista} album={album} />}
      </React.Fragment>
    )
  }
}

export default Artista
