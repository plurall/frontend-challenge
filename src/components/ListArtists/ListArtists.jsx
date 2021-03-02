import React from 'react'
import { Link } from 'react-router-dom'
import Conditional from '../Conditional'

import styles from './ListArtists.module.css'
import Avatar from '../Avatar'

const ListArtists = ({ artists, fetch }) => {
  return (
    <Conditional condition={artists.length > 0 } truthy={
      <section className={styles.containerArtistList}>
        {artists.map(({ id, name, images }) => {
          return (
            <Link to={`/artista/${id}`} key={id}>
              <div className={styles.cardArtist}>
                <div className={styles.artistAvatar}>
                  <Avatar width={'170px'} height={'170px'} images={images} name={name} />
                </div>
                <div className={styles.artistInfo}>
                  <div className={styles.artistTitle}>{name}</div>
                  <div className={styles.artistSubTitle}>Artista</div>
                </div>
              </div>
            </Link>
          )
        })}
          </section>
        } lie={<Conditional condition={fetch} truthy={<div className={styles.info}>Nenhum resultado encontrado!</div>} />}
      />
      )
    }

export default ListArtists
