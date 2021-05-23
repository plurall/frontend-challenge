import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './CardAlbums.module.css'

const CardAlbums = ({ resultAlbumsArtist }) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <h2>Albuns</h2>
      <div className={styles.cardAlbums}>
        {resultAlbumsArtist.map(item => (
          <span key={item.id}>
            <img src={item.image} alt={`imagem capa do Album ${item.name}`} />
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>Lançamento: {item.release_date}</p>
          </span>
        ))}
      </div>
    </div>
  </React.Fragment>
)

// CardAlbums.propTypes = {
//   resultAlbumsArtist: PropTypes.object.isRequired,
// }

export default CardAlbums
