import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineUser } from 'react-icons/ai'

import styles from './ArtistPicture.module.scss'

const ArtistPicture = ({ src, isLarge }) => (
  <div className={styles.wrapper} data-is-large={!!isLarge}>
    {src ? (
      <div className={styles.image} style={{ '--image': `url(${src})` }} />
    ) : (
      <div className={styles.defaultPicture}>
        <AiOutlineUser />
      </div>
    )}
  </div>
)

ArtistPicture.propTypes = {
  src: PropTypes.string,
  isLarge: PropTypes.bool,
}

export default ArtistPicture
