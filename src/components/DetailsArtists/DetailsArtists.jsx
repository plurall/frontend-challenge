import React, { useEffect } from 'react'

import { BrowserRouter as useParams } from 'react-router-dom'

import styles from './DetailsArtists.module.css'

const DetailsArtists = () => {
  const { id } = useParams()

  useEffect(() => {}, [])

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <p>Detalhes Artista</p>
        <p>Id: {id}</p>
      </div>
    </React.Fragment>
  )
}

export default DetailsArtists
