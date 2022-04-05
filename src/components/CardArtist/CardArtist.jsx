import React from 'react'
import { Link } from "react-router-dom"
import styles from './CardArtist.module.css'
import CoverImage from './../CoverImage';


function CardArtist({ artist, artists, searchInputValue }) {
  return (
    <Link to={{ pathname: '/artista/' + artist.id, artist: artist, artists: artists, searchInputValue: searchInputValue }} className={styles.cardArtist}>
      <CoverImage imageList={artist.images}></CoverImage>
      <h5 className={styles.nameArtist}>{artist.name}</h5>
    </Link>
  )
}

export default CardArtist;