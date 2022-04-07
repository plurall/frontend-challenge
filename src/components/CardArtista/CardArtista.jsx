/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './CardArtista.module.css'
import semImagem from '../../assets/img/singing.svg'

const CardArtista = ({ idArtista, imagem, name }) => {
  const hasImage = !!imagem

  return (
    <section className={styles.card}>
      <Link to={`/artista/${idArtista}`} alt="foto do artista">
        <img
          alt="imagem do artista"
          className={hasImage ? styles.Imagem : styles.NoImagem}
          src={imagem || semImagem}
        />
        <p className={styles.name}>{name}</p>
      </Link>
    </section>
  )
}
CardArtista.propTypes = {
  idArtista: PropTypes.string,
  imagem: PropTypes.string,
  name: PropTypes.string,
}

export default CardArtista
