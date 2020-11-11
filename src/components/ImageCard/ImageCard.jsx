import React from 'react'
import PropTypes from 'prop-types'

import { Tooltip } from 'plurall-ui'

import styles from './ImageCard.module.css'

class ImageCard extends React.Component {
  render() {
    const { item, onSelect } = this.props

    return (
      <Tooltip content={item.name} position="bottom" key={item.id}>
        <div className={styles.wrapper} onClick={() => onSelect(item.id)}>
          <div className={styles.imageWrapper}>
            {!!item.images.length ? (
              <img
                src={item.images[0].url}
                className={styles.artistImage}
                alt={`Imagem de ${item.name}`}
              />
            ) : (
              item.name
            )}
          </div>
        </div>
      </Tooltip>
    )
  }
}

ImageCard.defaultProps = {
  onSelect: () => {},
}

ImageCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.array,
  }).isRequired,
  onSelect: PropTypes.func,
}

export default ImageCard
