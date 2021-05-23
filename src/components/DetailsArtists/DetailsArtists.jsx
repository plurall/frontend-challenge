import React from 'react'
import PropTypes from 'prop-types'

import styles from './DetailsArtists.module.css'

const DetailsArtists = ({ resultDetailsArtist }) => {
  const { name, popularity, image, genre } = resultDetailsArtist

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <img src={image} alt={`imagem de capa - ${name}`} loading="lazy" />
        <div className={styles.informations}>
          <h1>{name}</h1>
          <strong>Popularidade:</strong>
          {popularity ? <p> {popularity}</p> : <p>Indisponível</p>} <br />
          <strong>Gêneros:</strong>
          {genre ? (
            genre.map(item => <p key={item}>- {item} </p>)
          ) : (
            <p>Indisponível</p>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

DetailsArtists.propTypes = {
  resultDetailsArtist: PropTypes.object.isRequired,
}

export default DetailsArtists
