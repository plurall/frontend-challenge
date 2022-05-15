
/* eslint-disable */
import React from 'react'
import Link from "react-router-dom/Link"
import magnifierGlassSVG from "../../assets/icons/magnifier-glass.svg"
import userDefault from "../../assets/icons/user-default.svg"
import {
  wrapper,
  image,
  link,
  footer,
  footer_strong as footerStrong,
  footer_span as footerSpan,
  details_image as detailsImage
} from "./CardArtist.module.css"

const CardArtist = ({id, photo, name}) => {

  return (
    <div className={wrapper}>
      <Link className={link} to={`/artista/${id}`}>
        <img className={detailsImage} src={magnifierGlassSVG} alt="" />
      </Link>
      <img className={image} src={photo || userDefault} alt="" />
      <footer className={footer}>
        <strong className={footerStrong}>{name}</strong>
        <span className={footerSpan}>Artist</span>
      </footer>
    </div>
  )
}

export default CardArtist
