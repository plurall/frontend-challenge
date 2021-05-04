import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'
import { dateConvert } from 'utils/date'

class Search extends React.Component {
  state = {
    loadingArtist: false,
    loadingAlbums: false,
    albums: null,
    artist: null,
    errorArtist: null,
    errorAlbums: null,
  }

  client = new SomosClient()

  getArtist = async id => {
    try {
      this.setState({ loadingArtist: true, errorArtist: null })
      const data = await this.client.getArtist(id)
      this.setState({ loadingArtist: false, artist: data, errorArtist: null })
      console.log(data)
    } catch (error) {
      console.log(error)
      this.setState({ loadingArtist: false, artist: null, errorArtist: error })
    }
  }

  getAlbums = async id => {
    try {
      this.setState({ loadingAlbums: true, errorAlbums: null })
      const data = await this.client.getArtistAlbums(id)
      this.setState({
        loadingAlbums: false,
        albums: data.items,
        errorAlbums: null,
      })
      console.log(data)
    } catch (error) {
      console.log(error)
      this.setState({ loadingAlbums: false, albums: null, errorAlbums: error })
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.getArtist(id)
    this.getAlbums(id)
  }

  render() {
    const { name, popularity, images, genres } = this.state.artist
      ? this.state.artist
      : {}

    let imageUrl =
      'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

    if (images != null) if (images.length > 0) imageUrl = images[0].url

    return (
      <React.Fragment>
        <SubHeader breadcrumb={[{ text: 'Home' }]} heading="Artist" />
        {this.state.loadingArtist && <div>loading</div>}
        {this.state.loadingAlbums && <div>loadingAlbums</div>}

        {this.state.artist != null ? (
          <div>
            <p>{name}</p>
            <p>{popularity}</p>
            <img src={imageUrl} alt={name} className={styles.image} />
            {genres.map(genre => (
              <p key={genre}>{genre}</p>
            ))}
          </div>
        ) : null}

        {this.state.albums != null ? (
          <div>
            {this.state.albums.map(album => {
              const imageUrl =
                album.images.length > 0
                  ? album.images[0].url
                  : 'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

              return (
                <div key={album.id}>
                  <p>{album.name}</p>
                  <p>{dateConvert(album.release_date)}</p>
                  <img
                    src={imageUrl}
                    alt={album.name}
                    className={styles.image}
                  />
                </div>
              )
            })}
          </div>
        ) : null}
      </React.Fragment>
    )
  }
}

export default Search
