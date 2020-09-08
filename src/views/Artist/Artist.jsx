import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { SomosClient } from 'utils'

import styles from './Artist.module.css'

import defaultAvatarImg from '../../assets/img/default-avatar.png'
import ArtistAlbumItem from './ArtistAlbumItem'

class Artist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }

  state = {
    artist: null,
    albums: [],
  }

  async componentDidMount() {
    const [artist, albums] = await Promise.all([
      this.client.getArtistById(this.props.match.params.id),
      this.client.getArtistAlbums(this.props.match.params.id)]
    );
    this.setState({ artist, albums });
  }

  client = new SomosClient()

  render() {
    return (
      <>
        {this.state.artist && (
          <div className={styles.wrapper}>
            <div className={styles.profile}>
              <div className={styles.photo}>
                {this.state.artist.images.length > 0 ? (
                  <img
                    src={this.state.artist.images[0].url}
                    alt={this.state.artist.name}
                  />
                ) : (
                    <img src={defaultAvatarImg} alt={this.state.artist.name} />
                  )}
              </div>
              <div className={styles.info}>
                <h1>{this.state.artist.name}</h1>
                <div className={styles.infoItem}>
                  {' '}{this.state.artist.genres && this.state.artist.genres.join(", ")}
                </div>
                <div className={styles.infoItem}>
                  <span>Popularidade:</span> {this.state.artist.popularity}%
                </div>
              </div>
            </div>

            <div className={styles.albums}>
              <h2>Top 10 álbuns</h2>
              {this.state.albums && this.state.albums.map(album => (
                <ArtistAlbumItem key={album.id} album={album} />
              ))}
            </div>

            <Link to="/busca" className={styles.backButton}>
              Voltar
            </Link>
          </div>
        )}
      </>
    )
  }
}

export default Artist
