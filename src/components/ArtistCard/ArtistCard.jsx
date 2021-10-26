import React from 'react';

import styles from './ArtistCard.module.css';

const ArtistCard = () => {
  return (
    <div className={ styles.card }>
      <div className={ styles.imgContainer}>
        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="person" />
      </div>
      <span>Artist Name</span>
    </div>
  )
}

export default ArtistCard;