import React from 'react'
import PropTypes from 'prop-types'

import styles from './CustomSliderArrow.module.scss'

const CustomSliderArrow = ({ className, style, onClick, icon }) => {
  return (
    <button className={`${className} ${styles.arrow}`} style={style} onClick={onClick}>
      {icon}
    </button>
  )
}

CustomSliderArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape(),
  onClick: PropTypes.func,
  icon: PropTypes.node,
}

export default CustomSliderArrow
