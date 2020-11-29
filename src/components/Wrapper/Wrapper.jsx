import React from 'react'
import PropTypes from 'prop-types'
import style from './Wrapper.module.css'

const Wrapper = ({ children }) => (
  <div className={style.wrapper}>{children}</div>
)

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Wrapper
