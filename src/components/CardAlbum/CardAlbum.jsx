import React from 'react'
import { Link } from "react-router-dom"
import styles from './CardAlbum.module.css'
import musicCover from '../../images/musicCover.jpg';
import {default as DateFormat} from './../../utils/dateFormat';
import {translate} from './../../locales';
import i18n from 'i18n-js';

class CardAlbum extends React.Component {
    
    getImage(album) {
        if (album.images !== undefined && album.images.length > 0) {
          return album.images[album.images.length - 2].url;
        } else {
          return musicCover
        }
      }

    render() {    
        return (
          <Link to={{pathname: this.props.album.external_urls.spotify}} target="_blank" className={styles.cardAlbum}>            
                  <img className={styles.coverAlbum} variant="top" src={this.getImage(this.props.album)} alt=" " />
                  <div className={styles.infoAlbum}>
                    <h4 className={styles.nameAlbum}>{this.props.album.name}</h4>
                    <h5>{translate('artista.ano')}: {DateFormat.format(this.props.album.release_date, i18n.defaultLocale)} </h5>
                  </div>
          </Link>
        )
      }

}

export default CardAlbum;