import * as styles from '../Artist.module.scss'

export function GenresList({ genres }: { genres: string[] }) {
  return (
    <div className={styles.genres}>
      {genres.map(genre => (
        <span key={genre} className={styles.genre}>
          {genre}
        </span>
      ))}
    </div>
  )
}
