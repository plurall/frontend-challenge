import React from 'react'
import styles from './InfoArtist.module.css'
import musicCover from '../../images/musicCover.jpg';
import { translate } from './../../locales';
import StarRating from './../StarRating';
import CoverImage from './../CoverImage';

function InfoArtist({artist}) {
  return (
    <div className={styles.Artists}>
      <div className={styles.coverArtists}>
       <CoverImage imageList={artist.images} customCoverClass={styles.coverArtists}></CoverImage>
      </div>
      <div className={styles.w100}>
        <div className={styles.artistLabel}>{translate('artista.nome')}: {artist.name}</div>
        <div className={styles.artistLabel}>{translate('artista.popularidade')}: <StarRating rating={artist.popularity}></StarRating></div>
        <div className={styles.artistLabel}>{translate('artista.seguidores')}: {artist.followers !== undefined ? artist.followers.total : ""}</div>
        <div className={styles.artistLabel}>{translate('artista.lista_de_generos')}: {artist.genres !== undefined ? artist.genres.join(", ") : ""}</div>
      </div>
    </div>
  )
}

export default InfoArtist;