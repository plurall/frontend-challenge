import React from 'react'
import PropTypes from 'prop-types'

function ImageNotFound({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      width={size}
      height={size}
    >
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="9.066"
        d="M4.54 4.54h320.93v320.93H4.54z"
      />
      <path
        fill="#fff"
        stroke="#636363"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.778"
        d="M286.34 286.34H43.67V43.67h242.67z"
      />
      <path fill="#fff" d="M286.34 286.34H46.56V46.56h239.78z" />
      <path
        fill="#fff"
        stroke="#a6a6a6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.372"
        d="M113.345 113.348h106.2v106.2h-106.2z"
      />
      <path
        fill="none"
        stroke="#e00000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M137.912 137.905l57.065 57.064m-.003-57.064l-57.065 57.064"
      />
    </svg>
  )
}

ImageNotFound.propTypes = {
  size: PropTypes.number,
}

ImageNotFound.defaultProps = {
  size: 24,
}

export default ImageNotFound
