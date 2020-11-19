import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SomosClient } from 'utils';
import ArtistAlbumItem from './ArtistAlbumItem';
import styles from './Artist.module.css';
import ArtistImg from '../../assets/artist-avatar.png';

class Artist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  state = {
    artist: null,
    albums: [],
  };

  async componentDidMount() {
    const [artist, albums] = await Promise.all([
      this.client.getArtistDetails(this.props.match.params.id),
      this.client.getArtistAlbums(this.props.match.params.id)]
    );
    this.setState({ artist, albums });
  };

  client = new SomosClient()

  render() {
    return (
      <>
        {this.state.artist && (
          <div className={styles.wrapper}>
            <Link to="/busca" className={styles.backButton}>
              FAZER NOVA BUSCA
            </Link>
            <div className={styles.profile}>
              <h1>{this.state.artist.name}</h1>
              {this.state.artist.images.length > 0 ? (
                <img
                  src={this.state.artist.images[0].url}
                  alt={this.state.artist.name}
                />
               ) :
               (
                <img 
                  src={ArtistImg} 
                  alt={this.state.artist.name} />
               )
              }
              <div className={styles.infoItem}>
                <b>{this.state.artist.genres.join(" - ")}</b>
              </div>
              <div className={styles.infoItem}>
                <span>Popularidade:</span> {this.state.artist.popularity}%
              </div>
            </div>

            <div className={styles.titleAlbums}>
              <h2>Top 10 álbuns</h2>
            </div>
            <div className={styles.albums}>
              {this.state.albums && this.state.albums.map(album => (
                <ArtistAlbumItem key={album.id} album={album} />
              ))}
            </div>

          </div>
        )}
      </>
    );
  };
};

export default Artist
