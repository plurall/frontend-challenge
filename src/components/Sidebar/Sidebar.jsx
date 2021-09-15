import Link from 'plurall-ui/dist/Link/Link';
import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.logo}>
      <img
        src="/images/logoSpotify.png"
        alt='logo Spotify'
        className={styles.image}
      />
      <p className={styles.title}>Spotify</p>
    </div>
    <div className={styles.icons}>
      <Link
        href={`/`}
      >
        <div className={styles.icon}>
          <img
            src="/images/home.png"
            alt='logo Spotify'
            className={styles.iconImage}
          />
          <p className={styles.iconParag}>Início</p>
        </div>
      </Link>
      <Link
       href={`/busca`}
      >
        <div className={styles.icon}>
          <img
            src="/images/search.png"
            alt='Spotify'
            className={styles.iconImage}
          />
          <p className={styles.iconParag}>Buscar</p>
        </div>
      </Link>
    </div>
  </div>
);

export default Sidebar