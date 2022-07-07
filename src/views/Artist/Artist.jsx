import React from 'react'

import { SubHeader, AlbumsSlider } from 'components'

import styles from './Artist.module.scss'

const Artist = () => {
  return (
    <>
      <SubHeader
        breadcrumb={[
          { text: 'Home', href: '/' },
        ]}
        heading="Desafio Front-end do Plurall"
      />
      <div className={styles.wrapper}>
        <div className={styles.artist}>
          <div className={styles.banner}>
            <img src="https://source.unsplash.com/random" alt="Banner" />
          </div>
          <div className={styles.bio}>
            <header>
              <h1>Nome do artista</h1>
            </header>
            <div className={styles.bioBody}>
              <ul>
                <li>
                  <strong>Popularidade: </strong>62
                </li>
                <li>
                  <strong>Gêneros: </strong>Rock, Pop, Sertanejo
                </li>
              </ul>
              <div className={styles.albumsWrapper}>
                <h2>Lista de Álbums</h2>
                <AlbumsSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Artist
