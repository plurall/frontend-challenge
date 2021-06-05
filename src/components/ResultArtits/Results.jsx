import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'plurall-ui'
import styles from './ResultsArtits.module.css'

function Results({ data }) {
  return (
    <div className={styles.cardResults}>
      {data.map(item => (
        <div className={styles.resultsContent} key={item.id}>
          <div>
            <img
              className={styles.imgArtist}
              src={item.image}
              alt={`a foto do artista ${item.name}`}
            />

            <div className={styles.artistTitleName}>
              <p className={styles.artistName}>{item.name}</p>
              <Link to={`/artista/${item.id}`}>
                <Button>DETALHES</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Results
