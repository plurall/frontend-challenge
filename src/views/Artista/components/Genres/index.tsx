import React from 'react'
import * as styles from './Genres.module.scss'

const Genres: React.FC<{ genres: string[] }> = ({ genres }) => {
  if (genres.length === 0) return ''

  return (
    <div className={styles.genreList}>
      {genres.map(genre => (
        <span key={genre} className={styles.genreTag}>
          {genre}
        </span>
      ))}
    </div>
  )
}

export default Genres
