import { Heading, Text } from '@plurall/elo'
import React from 'react'
import PropTypes from 'prop-types'

import { AlbumsList, GenresList, Layout, SubHeader } from 'components'
import { Client } from 'utils'

import styles from './Artist.module.css'

class Artist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {
    artist: null,
    albums: [],
    error: '',
    isLoading: true,
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    await this.fetchArtistWithAlbums(id)
  }

  fetchArtistWithAlbums = async id => {
    this.setState({
      isLoading: true,
      error: '',
    })

    try {
      const result = await Promise.all([
        Client.getArtist(id),
        Client.getArtistAlbums(id, 10),
      ])

      const [
        artist,
        albums,
      ] = result

      this.setState({
        artist,
        albums,
      })
    } catch (error) {
      this.setState({
        error,
      })
    }

    this.setState({
      isLoading: false,
    })
  }

  render() {
    const { artist, albums, isLoading, error } = this.state
    return (
      <Layout>
        <SubHeader
          breadcrumb={[
            { text: 'Home', href: '' },
            { text: 'Search', href: '/search' },
            { text: 'Artist' },
          ]}
        />
        <div className={styles.wrapper}>
          {isLoading ? (
            <Text
              element="p"
              className={styles.message}
            >
              Wait a little bit. Fetching artist on Spotify...
            </Text>
          ) : (
            null
          )}
          {!isLoading && error ? (
            <Text
              element="p"
              className={styles.message}
            >
              {error.message}
            </Text>
          ) : (
            null
          )}
          {!isLoading && !artist && !error ? (
            <Text
              element="p"
              className={styles.message}
            >
              Artist not found on Spotify.
            </Text>
          ) : (
            null
          )}
          {!isLoading && artist ? (
            <div>
              <div className={styles.artist}>
                {artist.images && artist.images.length ? (
                  <img
                    className={styles.image}
                    src={artist.images[0].url}
                    alt={artist.name}
                  />
                ) : (
                  null
                )}
                <div>
                  <Heading>{artist.name}</Heading>
                  <Text
                    element="p"
                  >
                    Popularity: {artist.popularity}
                  </Text>
                </div>
              </div>
              <div className={styles.genresWrapper}>
                <GenresList
                  genres={artist.genres}
                />
              </div>
              <div className={styles.albumsWrapper}>
                <AlbumsList
                  albums={albums}
                  className={styles.albumsWrapper}
                />
              </div>
            </div>
          ) : (
            null
          )}
        </div>
      </Layout>
    )
  }
}

export default Artist
