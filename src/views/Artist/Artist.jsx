import PropTypes from 'prop-types'
import React from 'react'

import { Heading, Text } from 'plurall-ui'

import { Layout } from 'components'
import { getOauthClient, SomosClient } from 'utils'

import styles from './Artist.module.scss'

class Artist extends React.Component {
  state = {
    artist: null,
    albums: null,
  }

  async componentDidMount() {
    const artistId = this.props.location.pathname.split('/')[2]
    const artist = await this.client.getArtistById(artistId)
    const albums = await this.client.getAlbumsByArtistId(artistId)

    if (artist?.status && albums?.status === 200) {
      this.setState({
        artist: artist.data,
        albums: albums.data.items,
      })

      return null
    }

    const OAuth = getOauthClient('/')
    window.location.href = OAuth.token.getUri()
    return null
  }

  client = new SomosClient()

  render() {
    const { artist, albums } = this.state

    if (artist === null || albums.length === null) {
      return (
        <Layout>
          <div className={styles.wrapper}>
            <p className={styles.name}>Carregando...</p>
          </div>
        </Layout>
      )
    }

    return (
      <>
        <Layout>
          <div className={styles.wrapper}>
            <div className={styles.artist}>
              <img src={artist?.images[0]?.url ? artist?.images[0]?.url : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} alt="" />
              <div className={styles.info}>
                <p className={styles.name}>{artist?.name}</p>
                <p className={styles.popularity}>{`Popularidade: ${artist?.popularity}`}</p>
                <Heading>Gêneros:</Heading>
                <div className={styles.genres}>
                  {artist?.genres?.map(genre => (<p key={genre} className={styles.genre}>{genre}</p>))}
                </div>
              </div>
            </div>

            <Heading className={styles.heading}>Álbuns:</Heading>
            <div className={styles.albums}>
              {albums?.map(album => (
                <div key={album.id} className={styles.album}>
                  <img src={album?.images[1]?.url} alt="" />
                  <Text size="big" bold>{album?.name}</Text>
                  <Text size="small">{(new Date(album.release_date)).toLocaleDateString('pt-BR')}</Text>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

Artist.propTypes = {
  location: PropTypes.string,
}.isRequired

export default Artist
