import React from 'react'
import PropTypes from 'prop-types'

import styles from './ImageCard.module.css'

class ImageCard extends React.Component {
  render() {
    const { item, onSelect } = this.props

    return (
      <div
        className={styles.wrapper}
        key={item.id}
        onClick={() => onSelect(item.id)}
      >
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
