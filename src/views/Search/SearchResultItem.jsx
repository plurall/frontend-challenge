import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Search.module.css'
import defaultAvatarImg from '../../assets/img/default-avatar.png'

class SearchResultItem extends React.Component {
  static propTypes = {
    artist: PropTypes.object,
  }

  render() {
    const {
      props: { artist },
    } = this

    return (
      <>
        <Link to={`/artista/${artist.id}`}>
          <div className={styles.item}>
            <div className={styles.photo}>
              {artist.images.length > 0 ? (
                <img src={artist.images[0].url} alt={artist.name} />
              ) : (
                  <img src={defaultAvatarImg} alt={artist.name} />
                )}
            </div>
            <div className={styles.title}>{artist.name}</div>
          </div>
        </Link>
      </>
    )
  }
}

export default SearchResultItem;
