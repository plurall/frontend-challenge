import React from 'react'
import PropTypes from 'prop-types'

import style from './Paper.module.css'

const Paper = ({ children, className }) => (
  <div className={className || style.paper}>{children}</div>
)

Paper.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.object,
}

Paper.defaultProps = {
  className: null,
}

export default Paper
