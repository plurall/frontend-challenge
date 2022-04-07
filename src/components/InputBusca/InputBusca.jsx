/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'
import { TextBox } from 'plurall-ui'
import styles from './InputBusca.module.css'

const InputBusca = ({ buscarArtista }) => {
  let texto = ''

  const handleMudancaTexto = evento => {
    if (evento.length <= 4) {
      return
    }
    texto = evento
    buscarArtista(texto)
  }

  return (
    <form className={styles.busca}>
      <TextBox
        placeholder="Busque aqui o artista"
        onChange={handleMudancaTexto}
      />
    </form>
  )
}

InputBusca.propTypes = {
  buscarArtista: PropTypes.func,
}

export default InputBusca
