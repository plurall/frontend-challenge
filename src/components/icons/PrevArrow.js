import React from 'react'
import PropTypes from 'prop-types'

const PrevArrow = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M20 .755L5.626 12 20 23.219l-.619.781L4 12 19.391 0 20 .755z" />
    </svg>
  )
}

PrevArrow.propTypes = {
  size: PropTypes.number,
}

PrevArrow.defaultProps = {
  size: 24,
}

export default PrevArrow
