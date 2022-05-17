import React from 'react'
import PropTypes from 'prop-types'
import genreMusical from "../../assets/icons/genre-musical.svg"

import {
  genre_container as genreContainer,
} from "./GenreMusic.module.css"

const GenreMusic = ({id, genre}) => {
  return (
    <div id={id} className={genreContainer}>
      <img src={genreMusical} alt="songs icon" />
      <span>{genre}</span>
    </div>
  )
}

GenreMusic.propTypes = {
  id: PropTypes.string,
  genre: PropTypes.string.isRequired
}

export default GenreMusic
