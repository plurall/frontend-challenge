import React from 'react'
import styles from './InfoArtist.module.css'
import musicCover from '../../images/musicCover.jpg';
import {translate} from './../../locales';
import StarRating from './../StarRating';

class InfoArtist extends React.Component {
    
    getImage(artists) {
        if (artists.images !== undefined && artists.images.length > 0) {
          return artists.images[artists.images.length - 2].url;
        } else {
          return musicCover
        }
      }

    render() {  
        let artist = this.props.artist;  
        return (
          <div className={styles.Artists}>
          <div className={styles.coverArtists}>
            <img className={styles.coverArtists} variant="top" src={this.getImage(artist)} alt=" " />
          </div>
          <div className={styles.w100}>
            <div className={styles.artistaLabel}>{translate('artista.nome')}: {artist.name}</div>
            <div className={styles.artistaLabel}>{translate('artista.popularidade')}: <StarRating rating={artist.popularity}></StarRating></div>
            <div className={styles.artistaLabel}>{translate('artista.seguidores')}: {artist.followers !== undefined ? artist.followers.total : ""}</div>
            <div className={styles.artistaLabel}>{translate('artista.lista_de_generos')}: {artist.genres !== undefined ? artist.genres.join(", ") : ""}</div>
          </div>
        </div>
        )
      }

}

export default InfoArtist;