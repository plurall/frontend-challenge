import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Search.module.css';
import ArtistImg from '../../assets/artist-avatar.png';

class ResultArtists extends React.Component {
  static propTypes = {
    artist: PropTypes.object,
  }

  render() {
    const {
      props: { artist },
    } = this;

    return (
      <>
        <Link to={`/artista/${artist.id}`}>
          <div className={styles.itemArtist}>
            <div className={styles.photoArtist}>
              {artist.images.length > 0 ? (
                <img src={artist.images[0].url} alt={artist.name} />
              ) : (
                <img src={ArtistImg} alt={artist.name} />
              )}
            </div>
            <p className={styles.titleArtist}>{artist.name}</p>
            <span className={styles.accessArtist}>Acessar</span>
          </div>
        </Link>
      </>
    );
  };
};

export default ResultArtists;
