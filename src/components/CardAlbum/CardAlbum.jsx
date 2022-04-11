import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import i18n from 'i18n-js'
import styles from './CardAlbum.module.css'
import { DateFormat } from './../../utils'
import { translate } from './../../locales'
import CoverImage from './../CoverImage'

const CardAlbum = ({ album }) => (
  <Link
    to={{ pathname: album.external_urls.spotify }}
    target="_blank"
    className={styles.cardAlbum}
  >
    <CoverImage imageList={album.images} />
    <div className={styles.infoAlbum}>
      <h4 className={styles.nameAlbum}>{album.name}</h4>
      <h5>
        {translate('artista.ano')}:{' '}
        {DateFormat.format(album.release_date, i18n.defaultLocale)}{' '}
      </h5>
    </div>
  </Link>
)

CardAlbum.propTypes = {
  album: PropTypes.object,
}

export default CardAlbum
