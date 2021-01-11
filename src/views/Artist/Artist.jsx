import React from 'react'

import { SubHeader, Album } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'

class Artist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: {},
      albums: {},
    }
    this.apiReturnArtists = {}
    this.apiReturnAlbums = {}
  }

  state = {}

  componentWillMount() {
    const api = new SomosClient()

    this.apiReturnArtists = api.getArtist(this.props.id)
    this.apiReturnArtists.then(() => {
      this.setState({ artist: api.artist })
    })

    this.apiReturnAlbums = api.getAlbumsFromArtist(this.props.id)
    this.apiReturnAlbums.then(() => {
      this.setState({ albums: api.albums.items })
    })
  }

  render() {
    const { artist, albums } = this.state

    console.log(artist)
    console.log(albums)

    let artistResult
    if (Object.keys(artist).length !== 0) {
      artistResult = (
        <div className={styles.artistResult}>
          <div className={styles.header}>
            <img src={artist.images[0].url} alt={`Foto - ${artist.name}`} />
            <h1>{artist.name}</h1>
            <span>{artist.genres.join(', ')}</span>
          </div>
          <p>Popularidade: {artist.popularity}</p>
        </div>
      )
    }

    const albumList = []
    if (Object.keys(albums).length !== 0) {
      for (let i = 0; i < 10; i += 1) {
        const imageSrc = albums[i].images[0] !== undefined ? albums[i].images[0].url : ''
        const date = Date.parse(albums[i].release_date)
        albumList.push(
          <Album imageSrc={imageSrc} name={albums[i].name} date={date} />,
        )
      }
    }

    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Artista' }]}
          buttonHref="/busca"
          heading="Artista"
        />
        <div className={styles.wrapper}>
          {artistResult}
        </div>
        <div className={styles.albumList}>
          {albumList}
        </div>
      </React.Fragment>
    )
  }
}

export default Artist
