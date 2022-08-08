import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artista.module.scss'

class Artista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: {},
      albums: [],
    }
  }

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { id } = this.props.match.params
    const { getArtistsById, getArtistsAlbums } = new SomosClient()
    const artistData = await getArtistsById(id)
    const albumsData = await getArtistsAlbums(id)
    this.setState({
      artist: artistData,
      albums: albumsData.items,
    })
  }

  render() {
    console.log(this.state.albums)
    console.log(this.state.artist)
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home / Busca / Artista' }]}
          heading={this.state.artist.name}
        />
        <div className={styles.wrapper}>
          <h1>Home da aplicação</h1>
        </div>
      </>
    )
  }
}

export default Artista
