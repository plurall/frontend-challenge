/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'
import { CardAlbum } from '../CardAlbum'
import imagem from '../../assets/img/artistaNaoEncontrado.svg'
import styles from './ListaAlbum.module.css'

const ListaAlbum = ({ albums }) => (
  <>
    <h2 className={styles.subtitulo}>Discografia</h2>
    <ul className={styles.listaAlbum}>
      {albums.map(album => (
        <li className={styles.itemAlbum} key={album.id}>
          <CardAlbum
            name={album.name ? album.name : imagem}
            imagem={album.image}
            date={album.date}
          />
        </li>
      ))}
    </ul>
  </>
)
ListaAlbum.propTypes = {
  albums: PropTypes.array,
}

export default ListaAlbum
