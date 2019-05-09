import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text } from '@plurall/elo'

import { SomosClient } from '../../utils'
import { Album, GenreList, Layout } from '../../components'
import styles from './Artist.module.css'

class Artist extends React.Component {
  state = {
    artist: '',
    albums: '',
    loading: true,
  }

  componentDidMount() {
    const { match } = this.props
    this.getArtistData(match.params)
  }

  getArtistData = async id => {
    const client = new SomosClient()
    const artist = await client.getArtist(id)
    const albums = await client.getAlbums(id)

    this.setState(
      {
        artist,
        albums,
      },
      () =>
        this.setState({
          loading: false,
        }),
    )
  }

  render() {
    const { artist, loading, albums } = this.state
    if (loading) return null
    return (
      <Layout>
        <div className={styles.wrapper}>
          <Heading size="normal">{artist.data.name}</Heading>
          <Text>Popularidade:{artist.data.popularity}</Text>
          <img
            className={styles.image}
            src={artist.data.images[0].url}
            alt={artist.data.name}
          />

          <GenreList data={artist.data.genres} />
          <Album data={albums.data.items} />
        </div>
      </Layout>
    )
  }
}

Artist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}
export default Artist
