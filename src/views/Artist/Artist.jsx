import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'
import { dateConvert } from 'utils/date'

class Search extends React.Component {
  state = {
    loading: false,
    loadingAlbums: false,
    albums: null,
    artist: null,
  }

  client = new SomosClient()

  componentDidMount() {
    // mover pra classe
    const getArtist = async () => {
      const id = this.props.match.params.id
      this.setState({ loading: true })
      const data = await this.client.getArtist(id)
      this.setState({ loading: false, artist: data })
      console.log(data)
    }

    const getAlbums = async () => {
      const id = this.props.match.params.id
      this.setState({ loadingAlbums: true })
      const data = await this.client.getArtistAlbums(id)
      this.setState({ loadingAlbums: false, albums: data.items })
      console.log(data)
    }
    getArtist()
    getAlbums()
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
        {this.state.loading && <div>loading</div>}
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
                <div>
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
