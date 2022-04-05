import React from 'react'
import { Link } from "react-router-dom"
import styles from './CardArtist.module.css'
import musicCover from '../../images/musicCover.jpg';

class CardArtist extends React.Component {
    
    getImage(artists) {
        if (artists.images !== undefined && artists.images.length > 0) {
          return artists.images[artists.images.length - 2].url;
        } else {
          return musicCover
        }
      }

    render() {    
        return (
          <Link to={{pathname: '/artista/'+ this.props.artist.id, artist:this.props.artist, artists: this.props.artists, searchInputValue:this.props.searchInputValue}} className={styles.cardArtist}>
                  <img className={styles.coverArtist} variant="top" src={this.getImage(this.props.artist)} alt=" " />
                  <h5 className={styles.nameArtist}>{this.props.artist.name}</h5>
          </Link>
        )
      }

}

export default CardArtist;