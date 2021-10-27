import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const Card = ({ element }) => {
  return (
    
    <Link to={ element.date ? '#' : `/artista/${element.id}`} style={ element.date ? { cursor: 'unset' } : {}}>
      <div className={` ${styles.card} animate__animated animate__fadeInUp`}>
        <div className={ styles.imgContainer }>
          <img className={ element.date ? styles.albumImg : styles.artistImg } src={element.image} alt={`${element.name}`} />
        </div>
        <span>{ element.name }</span>
        <span className={ styles.date } >{ element.date ? element.date : '' }</span>
      </div>
    </Link>
  )
}

export default Card;