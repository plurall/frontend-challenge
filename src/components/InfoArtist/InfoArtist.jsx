import React from 'react'
import PropTypes from 'prop-types'
import styles from './InfoArtist.module.css'
import { translate } from './../../locales'
import StarRating from './../StarRating'
import CoverImage from './../CoverImage'

const InfoArtist = ({ artist }) => (
  <div className={styles.Artists}>
    <div className={styles.coverArtists}>
      <CoverImage
        imageList={artist.images}
        customCoverClass={styles.coverArtists}
      />
    </div>
    <div className={styles.artistInfo}>
      <div className={styles.artistLabel}>
        <b>{translate('artista.nome')}:</b> {artist.name}
      </div>
      <div className={styles.artistLabel}>
        <b>{translate('artista.popularidade')}:</b>{' '}
        <StarRating rating={artist.popularity} />
      </div>
      <div className={styles.artistLabel}>
        <b>{translate('artista.seguidores')}:</b>{' '}
        {artist.followers !== undefined ? artist.followers.total : ''}
      </div>
      <div className={styles.artistLabel}>
        <b>{translate('artista.lista_de_generos')}:</b>{' '}
        {artist.genres !== undefined ? artist.genres.join(', ') : ''}
      </div>
    </div>
  </div>
)

InfoArtist.propTypes = {
  artist: PropTypes.object,
}

export default InfoArtist
