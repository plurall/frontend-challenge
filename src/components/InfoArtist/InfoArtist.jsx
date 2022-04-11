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
    <div className={styles.w100}>
      <div className={styles.artistLabel}>
        {translate('artista.nome')}: {artist.name}
      </div>
      <div className={styles.artistLabel}>
        {translate('artista.popularidade')}:{' '}
        <StarRating rating={artist.popularity} />
      </div>
      <div className={styles.artistLabel}>
        {translate('artista.seguidores')}:{' '}
        {artist.followers !== undefined ? artist.followers.total : ''}
      </div>
      <div className={styles.artistLabel}>
        {translate('artista.lista_de_generos')}:{' '}
        {artist.genres !== undefined ? artist.genres.join(', ') : ''}
      </div>
    </div>
  </div>
)

InfoArtist.propTypes = {
  artist: PropTypes.object,
}

export default InfoArtist
