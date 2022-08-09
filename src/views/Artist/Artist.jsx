import React from 'react'
import PropTypes from 'prop-types'

import styles from './Artist.module.scss'

class Artist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
  }

  state = {}

  render = () => (
    <div className={styles.wrapper}>Artist {this.props.match.params.id}</div>
  )
}

export default Artist
