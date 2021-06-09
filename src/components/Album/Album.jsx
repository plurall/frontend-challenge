import React from 'react'
import PropTypes from 'prop-types'

const Album = ({ image, name, releaseDate }) => (
  <li aria-label={`Information from album ${name}`}>
    <img
      src={image}
      alt={name}
      aria-label={`Album ${name}`}
    />
    <h2 aria-label="Name of album">{name}</h2>
    <span role="contentinfo" aria-label="Release date of album">
      {new Date(releaseDate).toLocaleDateString('pt-BR')}
    </span>
  </li>
)

Album.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  releaseDate: PropTypes.any.isRequired,
}

export default Album
