import React from 'react'
import { withRouter } from 'react-router-dom'

import { Tooltip } from 'plurall-ui'

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
            <Tooltip content={artist.name} position="bottom">
              <div
                className={styles.artistItem}
                key={artist.id}
                onClick={() => this.onSelect(artist.id)}
              >
                <div className={styles.imageWrapper}>
                  {!!artist.images.length ? (
                    <img
                      src={artist.images[0].url}
                      className={styles.artistImage}
                      alt={`Imagem de ${artist.name}`}
                    />
                  ) : (
                    artist.name
                  )}
                </div>
              </div>
            </Tooltip>
          ))}
      </div>
    )
  }
}

export default withRouter(ArtistsList)
