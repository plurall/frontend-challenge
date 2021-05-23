import React from 'react'
import PropTypes from 'prop-types'

import styles from './DetailsArtists.module.css'

const DetailsArtists = ({ resultDetailsArtist }) => {
  const { name, popularity, image, genre } = resultDetailsArtist

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <img src={image} alt={`imagem de capa - ${name}`} />
        <div className={styles.informations}>
          <h1>{name}</h1>
          <span>
            Popularidade:
            {popularity ? <p>{popularity}</p> : <p>Indisponível</p>}
            Gêneros:
            {genre ? (
              genre.map(item => <p key={item}>{item}</p>)
            ) : (
              <p>Indisponível</p>
            )}
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

DetailsArtists.propTypes = {
  resultDetailsArtist: PropTypes.object.isRequired,
}

export default DetailsArtists
