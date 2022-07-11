import React from 'react'
import PropTypes from 'prop-types'

import { ImageNotFound } from 'components/icons'

import styles from './ImagePlaceholder.module.scss'

const ImagePlaceholder = ({ size }) => {
  return (
    <div className={styles.container}>
      <ImageNotFound size={size} />
      <p>Imagem não encontrada</p>
    </div>
  )
}

ImagePlaceholder.propTypes = {
  size: PropTypes.number,
}

ImagePlaceholder.defaultProps = {
  size: 48,
}

export default ImagePlaceholder
