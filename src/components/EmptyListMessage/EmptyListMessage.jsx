import React from 'react'
import PropTypes from 'prop-types'

import styles from './EmptyListMessage.module.scss'

const messagesByCategory = {
  'empty-search': { message: 'Encontre seus artistas preferidos', emoji: '🎵' },
  'artist-not-found': { message: 'Nenhum artista encontrado', emoji: '😞' },
  'album-not-found': { message: 'Nenhum álbum encontrado', emoji: '🥴' },
}

const EmptyListMessage = ({ category }) => {
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

EmptyListMessage.propTypes = {
  category: PropTypes.string.isRequired,
}

export default EmptyListMessage
