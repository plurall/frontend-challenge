import React from 'react'
import styles from './Avatar.module.css'
import logoCapa from '../../assets/images/logo_capa_default.png'


const Avatar = ({ images, name, ...props }) => {
  return (
    <img  data-testid="avatar" {...props} className={styles.artistImg} src={images.length > 0 ? images[0].url : logoCapa} alt={`artista: ${name}`} />
  )
}

export default Avatar
