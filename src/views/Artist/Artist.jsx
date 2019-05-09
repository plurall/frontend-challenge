import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text } from '@plurall/elo'

import { SomosClient } from '../../utils'
import { Album, GenreList, Layout } from '../../components'

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
    console.log('ARTIST', artist)

    const albums = await client.getAlbums(id)

    console.log('ALBUMS', albums)

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
        <Heading size="normal">{artist.data.name}</Heading>
        {console.log(albums.data.items)}
        <Text>Popularidade{artist.data.popularity}</Text>
        <img src={artist.data.images[0].url} alt={artist.data.name} />

        <GenreList data={artist.data.genres} />
        <Album data={albums.data.items} />
      </Layout>
    )
  }
}

export default Artist
