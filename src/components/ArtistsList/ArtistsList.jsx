import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { ImageCard } from 'components'

import styles from './ArtistsList.module.css'

class ArtistsList extends React.Component {
  async onSelect(artistId) {
    this.props.history.push(`/artist/${artistId}`)
  }

  render() {
    const { artists } = this.props

    return (
      <div className={styles.wrapper}>
        {!!artists.length &&
          artists.map(artist => (
            <ImageCard
              item={artist}
              onSelect={artistId => this.onSelect(artistId)}
              key={artist.id}
            />
          ))}
      </div>
    )
  }
}

ArtistsList.propTypes = {
  artists: PropTypes.array.isRequired,
}

export default withRouter(ArtistsList)
