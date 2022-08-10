import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineUser } from 'react-icons/ai'

import styles from './Picture.module.scss'

const Picture = ({ src, type }) => (
  <div className={styles.wrapper} data-type={type}>
    {src ? (
      <div className={styles.image} style={{ '--image': `url(${src})` }} />
    ) : (
      <div className={styles.defaultPicture}>
        <AiOutlineUser />
      </div>
    )}
  </div>
)

Picture.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
}

export default Picture
