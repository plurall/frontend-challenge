import React from 'react'
import PropTypes from 'prop-types'

import styles from './NoArtistsMessage.module.scss'

const messagesByCategory = {
  'empty-search': { message: 'Encontre seus artistas preferidos', emoji: '🎵' },
  'not-found': { message: 'Nenhum artista encontrado', emoji: '😞' },
}

const NoArtistsMessage = ({ category }) => {
  const message = messagesByCategory[category] || null

  return (
    message && (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {message.message}
          <span role="img" aria-label="song icon" className={styles.songEmoji}>
            {message.emoji}
          </span>
        </div>
      </div>
    )
  )
}

NoArtistsMessage.propTypes = {
  category: PropTypes.string.isRequired,
}

export default NoArtistsMessage
