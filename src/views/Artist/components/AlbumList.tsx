import * as styles from '../Artist.module.scss'
import { Album } from 'types/artist'
import { AlbumCard } from './AlbumCard'

export function AlbumList({ albums }: { albums: Album[] }) {
  return (
    <section className={styles.albums}>
      <h2>Álbuns</h2>
      <div className={styles.albumList}>
        {albums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  )
}
