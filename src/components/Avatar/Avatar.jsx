import React from 'react'
import styles from './Avatar.module.css'


const Avatar = ({ images, name, ...props }) => {
  return (
    <img  {...props} className={styles.artistImg} src={images.length > 0 && images[0].url} alt={`artista: ${name}`} />
  )
}

export default Avatar
