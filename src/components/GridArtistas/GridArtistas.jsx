import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './GridArtistas.module.css'

const GridArtistas = ({ data }) =>
  data.length > 0 ? (
    <ul className={styles.artistList}>
      {data.map(({ id, images, name }) => (
        <Link to={`/artista/${id}`} key={id} data-testid="artist-id">
          <li>
            {images && images.length > 0 && (
              <img src={images[0].url} alt={name} />
            )}
            <p>{name}</p>
          </li>
        </Link>
      ))}
    </ul>
  ) : (
    <span className={styles.empty}>Nenhum resultado encontrado! :(</span>
  )

GridArtistas.defaultProps = {
  data: [],
}

GridArtistas.propTypes = {
  data: PropTypes.array,
}

export default GridArtistas
