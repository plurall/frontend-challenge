import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Text } from 'plurall-ui'

import { ImageCard } from 'components'

import styles from './ArtistsList.module.css'

class ArtistsList extends React.Component {
  async onSelect(artistId) {
    this.props.history.push(`/artist/${artistId}`)
  }

  render() {
    const { artists } = this.props

    return (
      !!artists.length && (
        <div className={styles.wrapper}>
          <div className={styles.artistWrapper}>
            {artists.map(artist => (
              <div className={styles.artistContainer} key={artist.id}>
                <ImageCard
                  item={artist}
                  onSelect={artistId => this.onSelect(artistId)}
                />
                <Text secondary>{artist.name}</Text>
              </div>
            ))}
          </div>
        </div>
      )
    )
  }
}

ArtistsList.propTypes = {
  artists: PropTypes.array.isRequired,
}

export default withRouter(ArtistsList)
