import React from 'react'
import PropTypes from 'prop-types'
import { CardAlbum } from '../CardAlbum'
import styles from './ListAlbum.module.css'

const ListAlbum = ({ albums }) => (
  <>
    <hr />
    <h2 className={styles.subtitle}>Lista dos últimos albuns</h2>
    <ul className={styles.list_album}>
      {albums.map(album => (
        <li className={styles.list_album_item} key={album.id}>
          <CardAlbum
            name={album.name ? album.name : null}
            imagem={album.image}
            date={album.date}
          />
        </li>
      ))}
    </ul>
  </>
)
ListAlbum.propTypes = {
  albums: PropTypes.array,
}

export default ListAlbum
