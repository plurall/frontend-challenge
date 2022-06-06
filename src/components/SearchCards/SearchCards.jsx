import React from 'react'

import styles from './SearchCards.module.css'

const SearchCards = ({ imageUrl, artistName }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.profileImage}>
        {imageUrl &&
          <div className={styles.profile}>
            <img src={imageUrl.length > 0 ? imageUrl[1].url : 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'} alt={artistName}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
              }} />
          </div>}
      </div >
      <div className={styles.profileNameArea}>
        <p className={styles.profileName}>{artistName}</p>
      </div>

    </div>
  )
}

export default SearchCards

