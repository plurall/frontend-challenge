import PropTypes from 'prop-types'
import React from 'react'

import styles from './Album.module.css'

import cd from './cd.svg'

const Album = ({ imageSrc, name, date }) => (
  <div className={styles.wrapper}>
    <img src={imageSrc !== '' ? imageSrc : cd} alt={`Album de ${name}`} />
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <span className={styles.date}>
        {new Intl.DateTimeFormat('pt-br', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(date)}
      </span>
    </div>
  </div>
)

Album.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Album
