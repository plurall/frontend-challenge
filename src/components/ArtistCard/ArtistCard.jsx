import React, { Component } from 'react'
import styles from './ArtistCard.module.css'
import { Link } from 'react-router-dom'

class ArtistCard extends Component {
  state = {}

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={styles.container}>
        <img
          src={this.props.artist.images[2] ? this.props.artist.images[2].url : ''}
          alt={this.props.artist.name}
          className={styles.artistImage}
        />
        <div className={styles.artistInfo}>
          <div className={styles.artistHeader}>
            <h2 className={styles.artistName}>{this.props.artist.name}</h2>
            <strong className={styles.artistFollowers}>{this.props.artist.followers.total} seguidores</strong>
          </div>
        </div>
        <Link className={styles.selectButton} to={`/artista/${this.props.artist.id}`} />
      </div>
    )
  }
}

export default ArtistCard
