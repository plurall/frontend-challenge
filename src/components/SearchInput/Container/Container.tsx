import PropTypes from 'prop-types'
import React from 'react'

const Container = ({ children }: any) => {
  return <div>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
