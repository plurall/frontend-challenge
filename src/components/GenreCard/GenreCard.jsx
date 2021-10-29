import React, { Component } from 'react'
import styles from './GenreCard.module.css'

class GenreCard extends Component {
  state = {}

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.artistName}>Gêneros</h2>

        <div className={styles.artistInfo}>
          {this.props.genre &&
          this.props.genre.map((genre) => <p key={genre}>{genre}</p>)}
        </div>
      </div>
    )
  }
}

export default GenreCard
