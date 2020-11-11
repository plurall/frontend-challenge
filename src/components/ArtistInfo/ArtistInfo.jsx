import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Heading, Text } from 'plurall-ui'

import styles from './ArtistInfo.module.css'

class ArtistInfo extends Component {
  render() {
    const { artist } = this.props

    return (
      <div className={styles.wrapper}>
        <img
          src={artist.images[0].url}
          alt={`Imagem de ${artist.name}`}
          className={styles.artistImage}
        />
        <div className={styles.artistDetails}>
          <Heading>{artist.name}</Heading>
          <span className={styles.info}>
            <Text secondary size="big">
              Popularidade:
            </Text>
            <Text size="big">{artist.popularity}</Text>
          </span>
          <span className={styles.info}>
            <Text secondary size="big">
              Gêneros:
            </Text>
            {artist.genres.map((gender, index) => (
              <Text size="big" key={index}>
                {gender},
              </Text>
            ))}
          </span>
        </div>
      </div>
    )
  }
}

ArtistInfo.propTypes = {
  artist: PropTypes.object.isRequired,
}

export default ArtistInfo
