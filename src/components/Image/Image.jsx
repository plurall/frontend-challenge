import React from 'react'
import PropTypes from 'prop-types'

const defaultImageUrl =
  'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg'

const Image = ({ src, className, alt }) => (
  <img className={className} src={src || defaultImageUrl} alt={alt} />
)

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}

Image.defaultProps = {
  src: null,
}

export default Image
