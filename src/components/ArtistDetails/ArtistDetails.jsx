import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './ArtistDetails.module.css'

class ArtistDetails extends Component {
  constructor(props){
    super(props)
  }



  render() {
    const { artist } = this.props;
    return (
      <div>
        <h1 className={styles['c-artist__title']}>{artist.name}</h1>
        <h1 className={styles['c-artist__title']}>{artist.popularity}</h1>
        <img
          src={(artist.images.length > 0 ? artist.images[0].url:"")}
          alt={artist.name}
        />
        {artist &&
          artist.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))
        }

      </div>
    )
  }
}

ArtistDetails.propTypes = {
  artist: PropTypes.object.isRequired,
}


export default ArtistDetails
