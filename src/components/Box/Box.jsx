import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { Heading } from '@plurall/elo'
import { Artist } from '../../views'
import styles from './Box.module.css'

const Box = value => {
  if (value === undefined || value.data.length <= 0) return null

  return (
    <ul className={styles.wrapper_list}>
      {value.data.map(artist => (
        <li className={styles.list} key={artist.id}>
          <Link className={styles.link}to={`/artista/${artist.id}`} render={Artist}>
            <img className={styles.image} src={artist.images[1].url} alt={artist.name} />
            <Heading size="small">{artist.name}</Heading>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Box
