import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Wrapper.module.css'

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  state = {}

  render() {
    const {
      props: { children },
    } = this

    return (
      <div className={styles.wrapper}>
        {children}
      </div>
    )
  }
}

export default Wrapper
