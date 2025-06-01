import { formatDate } from 'utils/formatDate'
import * as styles from '../Artist.module.scss'
import { Album } from 'types/artist'

export function AlbumCard({ album }: { album: Album }) {
  return (
    <div className={styles.albumCard}>
      <img
        src={album.images?.[0]?.url || '/placeholder.png'}
        alt={album.name}
        className={styles.albumImage}
      />
      <div className={styles.albumName}>{album.name}</div>
      <div className={styles.albumDate}>{formatDate(album.release_date)}</div>
    </div>
  )
}
