import React from 'react';
import PropTypes from 'prop-types'
import magnifierGlassSVG from "../../assets/icons/magnifier-glass.svg"

import {
  button_link as buttonLink,
  details_image as detailsImage
 } from './ButtonLink.module.css';
import { Link } from 'react-router-dom';

const ButtonLink = ({
  id,
  name,
  linkTo,
  image = {
    url: magnifierGlassSVG,
    alt: "image default"
  }
}) => {

  return (
    <Link
      id={id}
      name={name}
      className={buttonLink}
      to={linkTo}
    >
      <img
        className={detailsImage}
        src={image.url}
        alt={image.alt}
      />
    </Link>
  );
}

ButtonLink.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  })
}

export default ButtonLink;
