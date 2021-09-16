import React from 'react'
import styles from './Card.module.css'

const Card = (data) => {
  return (
    <div className={styles.cardsHome}>
      {
        data.map((a) => (
          <div
            key={a.name}
            className={styles.cardHome} >
            <img
              src={a.image}
              alt={a.name}
              className={styles.imageCardHome}
            />
            <p className={styles.nameHome}>{a.name}</p>
            <p className={styles.category}>{a.type}</p>
          </div>
        ))
      }
    </div>
  )
}
export default Card;