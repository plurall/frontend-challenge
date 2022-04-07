/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardAlbum.module.css'

const CardAlbum = ({ imagem, name, date }) => (
  <section className={styles.card}>
    <img alt="imagem do Album" className={styles.Imagem} src={imagem} />
    <p className={styles.Info}>{name}</p>
    <p className={styles.Info}>Lançamento: {date || 'não informado'}</p>
  </section>
)
CardAlbum.propTypes = {
  imagem: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
}
export default CardAlbum
