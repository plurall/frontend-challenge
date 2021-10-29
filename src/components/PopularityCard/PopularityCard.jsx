import React, { Component } from 'react'
import styles from './PopularityCard.module.css'

class PopularityCard extends Component {
  state = {}

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.artistName}>Popularidade</h2>

        <div className={styles.artistInfo}>
          <p>Score: {this.props.popularity}</p>
          <p>Seguidores: {this.props.followers}</p>
        </div>
      </div>
    )
  }
}

export default PopularityCard
