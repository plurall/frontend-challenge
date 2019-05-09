import React from 'react'
import { Heading, Text } from '@plurall/elo'
import { formatDate } from '../../utils'
import styles from './Album.module.css'

const Album = albumName => (
  <div>
    <Heading size="small">Álbuns do artista</Heading>
    <ul className={styles.wrapper_list}>
      {albumName.data.map(album => (
        <li className={styles.list} key={album.id}>
          <img
            className={styles.img}
            src={album.images[1].url}
            alt={album.name}
          />
          <Text>{album.name}</Text>
          <Text>
            <time>{formatDate(album.release_date)}</time>
          </Text>
        </li>
      ))}
    </ul>
  </div>
)

export default Album
