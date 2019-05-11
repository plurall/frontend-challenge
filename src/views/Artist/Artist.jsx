import React, { Component } from 'react'
import { shape, string } from 'prop-types'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'

class Artist extends Component {
  state = {
    artist: {},
    albums: [],
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props
    try {
      const artist = await this.client.getArtist(id)
      const albums = await this.client.getAlbums(id)

      this.setState({ artist, albums })
    } catch (error) {
      this.setState({ artist: {}, albums: [] })
    }
  }

  client = new SomosClient()

  showGenres = artist => {
    if (artist.genres && artist.genres.length) {
      const { genres } = styles

      return artist.genres.map(genre => (
        <span className={genres} key={genre}>{genre}</span>
      ))
    }

    return null
  }

  showAlbums = albums => {
    if (albums.length) {
      const {
        album: albumClass,
        'album-info': albumInfo,
        'album-img': albumImg,
      } = styles

      return albums.map((album, index) => (
        <div key={`${index + album.name}`} className={albumClass}>
          <img className={albumImg} src={album.image} alt={album.name} />
          <div className={albumInfo}>
            <p>{album.name}</p>
            <p>{album.date}</p>
          </div>
        </div>
      ))
    }

    return null
  }

  render() {
    const { artist, albums } = this.state
    const {
      wrapper,
      'album-wrapper': albumsWrapper,
      'artist-wrapper': artistWrapper,
      artist: artistClass,
      'artist-img': artistImg,
      'artist-info': artistInfo,
    } = styles

    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Artista' }]}
          heading=""
        />
        <div className={wrapper}>
          <div className={artistWrapper}>
            <div className={artistClass}>
              <img className={artistImg} src={artist.image} alt={artist.name} />
              <div className={artistInfo}>
                <p><b>Artista:</b> {artist.name}</p>
                <p><b>Popularidade:</b> {artist.popularity}</p>
                <p><b>Gêneros:</b></p>
                {this.showGenres(artist)}
              </div>
            </div>
            <div className={albumsWrapper}>
              {this.showAlbums(albums)}
            </div>
          </div>
        </div>
      </>
    )
  }
}

Artist.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}

export default Artist
