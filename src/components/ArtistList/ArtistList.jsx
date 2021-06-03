import React from 'react'
import PropTypes from 'prop-types'

import styles from './ArtistList.module.css'

const {
  'artist-box': artistBox,
  'artist-img': artistImg,
  'artist-name': artistName,
  'artist-stats-box': artistStatsBox,
} = styles

function ArtistList({ name, image, id, pushing }) {
  return (
    <div
      key={id}
      className={artistBox}
      onClick={() => pushing(`/artist/${id}`)}
    >
      <img
        src={image.length === 0 ? null : image[0].url}
        alt={`${name} posing`}
        className={artistImg}
      />
      <div className={artistStatsBox}>
        <span className={artistName}>
          {name.length > 10 ? name.substr(0, 12) : name}
        </span>
      </div>
    </div>
  )
}

ArtistList.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  pushing: PropTypes.func,
}

export default ArtistList
