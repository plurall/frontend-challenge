import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardAlbum.module.css'

const CardAlbum = ({ imagem, name, date }) => (
  <section className={styles.card}>
    <img alt={`Imagem do Album: ${name}`} className={styles.image} src={imagem} />
    <div className="content">
      <h1 id="page-title">{name}</h1>
      <p>Data do lançamento: {date || ''}</p>
    </div>
  </section>
)
CardAlbum.propTypes = {
  imagem: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
}
export default CardAlbum
