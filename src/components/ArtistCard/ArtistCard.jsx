import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import styles from './ArtistCard.module.css'

class ArtistCard extends React.Component {


  render() {
    const { artist } = this.props;

    return (
      <Link to={`artist/${artist.id}`}>
        <div className={styles['c-artist']}>
          <div className={styles['c-artist__cover']}>
            <img
              src={(artist.images.length > 0 ? artist.images[0].url:"")}
              alt={artist.name}
              className={styles['c-artist__picture']}
            />
          </div>
          <h1 className={styles['c-artist__title']}>{artist.name}</h1>
        </div>
      </Link>
    )
  }
}

ArtistCard.propTypes = {
  artist: PropTypes.object.isRequired,
}


export default ArtistCard
