import React from 'react'
import PropTypes from 'prop-types'

import { Heading, Text } from 'plurall-ui'

import { ImageCard } from 'components'

import styles from './AlbumsList.module.css'

class AlbumsList extends React.Component {
  async onSelect(artistId) {
    this.props.history.push(`/artist/${artistId}`)
  }

  formatDate(date) {
    return date
      .split('-')
      .reverse()
      .join('/')
  }

  render() {
    const { albums } = this.props

    return (
      <div className={styles.wrapper}>
        <Heading>Albums:</Heading>

        <div className={styles.albumWrapper}>
          {!!albums.length &&
            albums.map(album => (
              <div className={styles.albumContainer}>
                <ImageCard item={album} key={album.id} />
                <Text secondary>{album.name}</Text>
                <Text>{this.formatDate(album.release_date)}</Text>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

AlbumsList.propTypes = {
  albums: PropTypes.array.isRequired,
}

export default AlbumsList
