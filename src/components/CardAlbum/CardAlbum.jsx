import React from 'react'
import { Link } from "react-router-dom"
import styles from './CardAlbum.module.css'
import { default as DateFormat } from './../../utils/dateFormat';
import { translate } from './../../locales';
import i18n from 'i18n-js';
import CoverImage from './../CoverImage';


function CardAlbum({ album }) {
  return (
    <Link to={{ pathname: album.external_urls.spotify }} target="_blank" className={styles.cardAlbum}>
      <CoverImage imageList={album.images}></CoverImage>
      <div className={styles.infoAlbum}>
        <h4 className={styles.nameAlbum}>{album.name}</h4>
        <h5>{translate('artista.ano')}: {DateFormat.format(album.release_date, i18n.defaultLocale)} </h5>
      </div>
    </Link>
  )
}


export default CardAlbum;