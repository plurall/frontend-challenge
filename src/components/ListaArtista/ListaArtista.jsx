/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'
import { CardArtista } from '../CardArtista'
import styles from './ListaArtista.module.css'

const ListaArtista = ({ artistas }) => (
  <ul className={styles.lista}>
    {artistas.map(artista => (
      <li key={artista.id}>
        <CardArtista
          name={artista.name ? artista.name : ''}
          imagem={artista.images[0] ? artista.images[0].url : null}
          idArtista={artista.id}
        />
      </li>
    ))}
  </ul>
)
ListaArtista.propTypes = {
  artistas: PropTypes.array,
}
export default ListaArtista
