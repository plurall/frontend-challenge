import React, { Component } from 'react'

import styles from './Loading.module.css'

class Loading extends Component {
  render() {
    return (
      <div>
        {this.props.loading && (
          <div className={styles.loading}>Carregando...</div>
        )}
      </div>
    )
  }
}

export default Loading
