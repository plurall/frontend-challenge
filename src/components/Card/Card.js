import React from 'react'
import styles from './Card.module.css'
import Link from 'plurall-ui/dist/Link/Link';

const Card = (data, type) => {
  return (
    <>
      {
        data.map((a) => (
          <Link
            href={`/artista/${a.id}`}
            key={a.id}
            className={styles.card}
          >
            <div  >
              <img
                src={a.images[2].url}
                alt={a.name}
                className={styles.imageCard}
              />
              <p className={styles.name}>{a.name}</p>
              <p className={styles.category}>{type}</p>
            </div>
          </Link>
        ))
      }
    </>
  )
}
export default Card;