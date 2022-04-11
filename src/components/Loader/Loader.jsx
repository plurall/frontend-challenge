import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loader.module.css'
import { translate } from '../../locales'

const Loader = ({ text }) => (
  <div className={styles.loader}>
    <div className={styles.lds_ring}>
      <div />
      <div />
      <div />
      <div />
    </div>
    <div>{text !== undefined ? text : translate('loader.carregando')}</div>
  </div>
)

Loader.propTypes = {
  text: PropTypes.string,
}

export default Loader
