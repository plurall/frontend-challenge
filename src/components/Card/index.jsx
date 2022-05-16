
/* eslint-disable */
import React from 'react'
import Link from "react-router-dom/Link"
import { BaseRoutes } from 'routes/BaseRoutes'
import magnifierGlassSVG from "../../assets/icons/magnifier-glass.svg"
import userDefault from "../../assets/icons/user-default.svg"
import {
  image,
  folder,
  link,
  wrapper,
  banner,
  footer,
  footer_artist as footerArtist,
  footer_folder as footerFolder,
  wrapper_artist as wrapperArtist,
  wrapper_folder as wrapperFolder,
  details_image as detailsImage
} from "./Card.module.css"

const Card = ({id, photo, name, description = "Artista"}) => {
  return (
    <div className={`${wrapper} ${description === "Artista" ? wrapperArtist : wrapperFolder}`}>

      {description === "Artista" &&
        <Link className={link} to={{pathname: BaseRoutes.artist.replace(":id", id), state: {name}}}>
          <img className={detailsImage} src={magnifierGlassSVG} alt="lupa" />
        </Link>
      }

      <img
        className={`${banner} ${ description !== "Artista" ? folder : image}`}
        src={photo || userDefault} alt="foto do artista"
      />

      <footer className={`${footer} ${ description === "Artista" ? footerArtist : footerFolder}`}>
        <strong>{name}</strong>
        <span >{description}</span>
      </footer>
    </div>
  )
}

export default Card
