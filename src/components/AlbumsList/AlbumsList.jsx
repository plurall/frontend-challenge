import React from 'react';

import styles from './AlbumsList.module.css'

function AlbumsList({ data }) {
  const { images, name, release_date } = data
  const formatedDate = release_date.split('-').reverse().join('/');

  return (
    <>
      <li className={styles.listContent}>
        <div className={styles.albumImage}>
          {images &&
            <img src={images[1].url} alt={'artistName'}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
              }} />
          }
        </div>
        <div className={styles.albumDescription}>
          <p>{name}</p>
          <p>{formatedDate}</p>
        </div>
      </li>
    </>
  );
}

export default AlbumsList;
