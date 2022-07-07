import React from 'react'
import PropTypes from 'prop-types'

const NextArrow = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M4 .755L18.374 12 4 23.219l.619.781L20 12 4.609 0 4 .755z" />
    </svg>
  )
}

NextArrow.propTypes = {
  size: PropTypes.number,
}

NextArrow.defaultProps = {
  size: 24,
}

export default NextArrow
