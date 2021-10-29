import React, { Component } from 'react'
import styles from './AlbumCard.module.css'

class AlbumCard extends Component {
  state = {}

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={styles.container}>
        <img
          src={this.props.album.images[1] ? this.props.album.images[1].url : ''}
          alt={this.props.album.name}
          className={styles.albumImage}
        />
        <div className={styles.albumInfo}>
          <h3 className={styles.albumName}>{this.props.album.name}</h3>
          <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(this.props.album.release_date))}</span>
        </div>
      </div>
    )
  }
}

export default AlbumCard
