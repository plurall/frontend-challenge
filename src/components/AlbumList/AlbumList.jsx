import React from 'react'
import PropTypes from 'prop-types'
import styles from './AlbumList.module.css'

const {
  'artist-album-box': artistAlbumBox,
  'album-img': albumImg,
} = styles

function AlbumList({ image, name, release }) {
  return (
    <div className={artistAlbumBox}>
      <img
        src={image[0].url}
        alt={name}
        className={albumImg}
      />
      <p>
        {name.length > 12 ? name.substr(0, 15) : name}
      </p>
      <p>{new Date(release).toLocaleDateString()}</p>
    </div>
  )
}

AlbumList.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  release: PropTypes.string,
}


export default AlbumList
