import { Input, Sidebar } from 'components'
import React, { useContext } from 'react'
import styles from './Search.module.css'
import { Footer } from 'plurall-footer'
import Context from 'context/Context'
import ArtistSearchCard from 'components/Card/ArtistSearchCard'

const Search = () => {
  const { status, artistFilter: artist } = useContext(Context)
  return (
    <React.Fragment>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.mainInput}>
          <img className={styles.image} src="images/bg1.jpg" alt="bg" />
          <h1 className={styles.title}>Buscar</h1>
          <Input />
          {!status || ArtistSearchCard(artist)}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Search
