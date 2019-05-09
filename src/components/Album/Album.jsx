import React from 'react'
import { Heading, Text } from '@plurall/elo'
import styles from './Album.module.css'

const Album = albumName => (
  <div>
    <Heading size="small">Lista de gêneros</Heading>
    <ul className={styles.wrapper}>
      {albumName.data.map(album => (
        <li className={styles.albumList} key={album.id}>
          <img
            className={styles.img}
            src={album.images[1].url}
            alt={album.name}
          />
          <Text>{album.name}</Text>
          <time>{album.release_date}</time>
        </li>
      ))}
    </ul>
  </div>
)

export default Album
