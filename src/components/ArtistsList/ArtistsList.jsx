import React from 'react'
import { ArtistCard } from 'components'

import styles from './ArtistsList.module.scss'

const ArtistsList = () => (
  <div className={styles.listContainer}>
    <ArtistCard />
    <ArtistCard />
    <ArtistCard />
    <ArtistCard />
    <ArtistCard />
    <ArtistCard />
  </div>
  )

export default ArtistsList
