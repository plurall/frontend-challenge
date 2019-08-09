import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import { SpotifyClient } from 'utils'

import styles from './Artist.module.css'
import logoURL from '../../assets/img/spotify-logo.png'
import defaultAvatar from '../../assets/img/default_avatar.png'

class Search extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }

  state = {}

  async componentDidMount() {
    const artist = await this.client.getArtist(this.props.match.params.id)
    const albums = await this.client.getArtistAlbums(this.props.match.params.id)

    await this.setState({ artist, albums })
  }
  client = new SpotifyClient()

  render() {
    return (
      <React.Fragment>
        {this.state.artist && (
          <div className={styles.wrapper}>
            <Link to="/">
              <img src={logoURL} alt="Spotify" className={styles.logo} />
            </Link>
            <div className={styles.profile}>
              <div className={styles.photo}>
                {this.state.artist.images.length > 0 ? (
                  <img
                    src={this.state.artist.images[0].url}
                    alt={this.state.artist.name}
                  />
                ) : (
                  <img src={defaultAvatar} alt={this.state.artist.name} />
                )}
              </div>
              <div className={styles.info}>
                <h1>{this.state.artist.name}</h1>
                <p>
                  <strong>Popularidade</strong>: {this.state.artist.popularity}
                  <br />
                  <strong>Gêneros</strong>:{' '}
                  {this.state.artist.genres &&
                    this.state.artist.genres.map((genre, i) => (
                      <span key={`genre_${genre}`}>
                        {(i ? ', ' : '') + genre}
                      </span>
                    ))}
                </p>
              </div>
            </div>

            <div className={styles.results}>
              <h2>10 últimos álbuns:</h2>
              {this.state.albums &&
                this.state.albums.map(album => (
                  <div className={styles.item} key={album.id}>
                    <div className={styles.photo}>
                      {album.images.length > 0 ? (
                        <img src={album.images[0].url} alt={album.name} />
                      ) : (
                        <img src={defaultAvatar} alt={album.name} />
                      )}
                    </div>
                    <div className={styles.albumName}>{album.name}</div>
                    <Moment format="DD/MM/YYYY" className={styles.releaseDate}>
                      {album.release_date}
                    </Moment>
                  </div>
                ))}
            </div>

            <Link to="/busca" className={styles.btn}>
              Voltar
            </Link>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Search
