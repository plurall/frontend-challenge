
/* eslint-disable */
import React from 'react'
import genreMusical from "../../assets/icons/genre-musical.svg"

import {
  genre_container as genreContainer,
} from "./GenreMusic.module.css"

const GenreMusic = ({genre}) => {
  return (
    <div className={genreContainer}>
      <img src={genreMusical} alt="" />
      <span>{genre}</span>
    </div>
  )
}

export default GenreMusic
