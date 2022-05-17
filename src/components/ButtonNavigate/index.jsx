import React from 'react';
import PropTypes from 'prop-types'

import {
  button
} from './ButtonNavigate.module.css';

const ButtonNavigate = ({
  id,
  name,
  disabled = false,
  onClick,
  image
}) => {
  return (
    <button
      id={id}
      name={name}
      disabled={disabled}
      onClick={onClick}
      className={button}
    >
      <img src={image.url} alt={image.alt} />
    </button>
  );
}

ButtonNavigate.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
}

export default ButtonNavigate;
