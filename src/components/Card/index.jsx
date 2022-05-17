
/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { BaseRoutes } from 'routes/BaseRoutes'
import magnifierGlassSVG from "../../assets/icons/magnifier-glass.svg"
import userDefault from "../../assets/icons/user-default.svg"
import ButtonLink from '../../components/ButtonLink'
import {
  image,
  folder,
  wrapper,
  banner,
  footer,
  footer_artist as footerArtist,
  footer_folder as footerFolder,
  wrapper_artist as wrapperArtist,
  wrapper_folder as wrapperFolder,
} from "./Card.module.css"

const Card = ({
  id,
  photo,
  name,
  description = "Artista",
  type = "artist"
}) => {
  const isArtist = type === "artist"
  return (
    <div className={`${wrapper} ${description === "Artista" ? wrapperArtist : wrapperFolder}`}>

      {isArtist ?
        <ButtonLink
          id={`link_${id}`}
          name={name}
          linkTo={BaseRoutes.artist.replace(":id", id)}
          image={{
            url: magnifierGlassSVG,
            alt:"lupa"
          }}
        />
      : ""}

      <img
        className={`${banner} ${ isArtist ? image : folder}`}
        src={photo || userDefault} alt="foto do artista"
      />

      <footer className={`${footer} ${ isArtist ? footerArtist : footerFolder}`}>
        <strong>{name}</strong>
        <span >{description}</span>
      </footer>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
}

export default Card
