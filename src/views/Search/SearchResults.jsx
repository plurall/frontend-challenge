import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Search.module.css'
import defaultAvatar from '../../assets/img/default_avatar.png'

class SearchResults extends React.Component {
  static propTypes = {
    artists: PropTypes.array,
  }

  render() {
    const {
      props: { artists },
    } = this

    return (
      <>
        {artists &&
          artists.map(artist => (
            <Link to={`artista/${artist.id}`} key={artist.id}>
              <div className={styles.item}>
                <div className={styles.photo}>
                  {artist.images.length > 0 ? (
                    <img src={artist.images[0].url} alt={artist.name} />
                  ) : (
                    <img src={defaultAvatar} alt={artist.name} />
                  )}
                </div>
                <div className={styles.artistName}>{artist.name}</div>
              </div>
            </Link>
          ))}
      </>
    )
  }
}

export default SearchResults
