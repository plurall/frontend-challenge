import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './CardAlbums.module.css'

const CardAlbums = ({ resultAlbumsArtist }) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <div className={styles.cardAlbums}>
        {resultAlbumsArtist.map(item => (
          <span key={item.id}>
            <img src={item.image} alt={`imagem capa do Album ${item.name}`} />
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>Lançamento: {item.releaseDate}</p>
          </span>
        ))}
      </div>
    </div>
  </React.Fragment>
)

CardAlbums.propTypes = {
  resultAlbumsArtist: PropTypes.array.isRequired,
}

export default CardAlbums
