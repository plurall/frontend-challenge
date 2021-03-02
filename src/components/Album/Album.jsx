import React from 'react'
import {  format } from 'date-fns'
import Conditional from '../Conditional'
import styles from './Album.module.css'

const Album = ({albums}) => {

  const formatedData = (data) => {
    return format(new Date(data), 'dd/MM/yyyy')
  }

  return (
    <section about={"albums artista"}>
      <div className={styles.container}>
        {albums.map(({ id, name, images, release_date }) => (
          <div key={id} className={styles.wrapper}>
            <Conditional condition={images && images.length > 0} truthy={
              <div className={styles.wrapperImg}>
                <img data-testid="img" src={images[0].url} alt={name} />
              </div>
            }
            />
            <div className={styles.info}>
              <div className={styles.title} data-testid="name">{name}</div>
              <div className={styles.data} data-testid="data">{formatedData(release_date)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Album
