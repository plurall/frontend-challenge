import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { ArtistCard, Tag } from 'components';

import styles from './ArtistDetails.module.css'

class ArtistDetails extends Component {

  render() {
    const { artist, albums } = this.props;

    return (
      <div className={styles['c-artist']}>
        <section className={styles['c-artist__wrapper']}>
          <div className={styles['c-artist__cover']}>
            <img
              src={(artist.images.length > 0 ? artist.images[0].url:"")}
              alt={artist.name}
              className={styles['c-artist__picture']}
            />
          </div>
          <div className={styles['c-artist__info']}>
            <h1 className={styles['c-artist__title']}>{artist.name}</h1>
            <div className={styles['c-artist__subtitle']}>Popularidade {artist.popularity}</div>
            <div className={styles['c-genres']}>
              <div className={styles['c-artist__subtitle']}>Gênero</div>
              {artist &&
                artist.genres.map((genre, index) => (
                  <Tag
                    key={index}
                    tagName={genre}
                  />
                ))
              }
            </div>
          </div>
        </section>

        <section>
          <h2 className={styles['c-artist__title']}>Álbuns</h2>

          <div className={styles['c-artist__albums']}>
            {albums &&
              albums.items.map((album, index) => (
                <ArtistCard key={index} artist={album} />
              ))
            }
          </div>
        </section>
      </div>
    )
  }
}

ArtistDetails.propTypes = {
  artist: PropTypes.object.isRequired,
}


export default ArtistDetails
