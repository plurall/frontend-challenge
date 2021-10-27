import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const Card = ({ element }) => {
  console.log(element.image)
  return (
    <Link to={ element.date ? '' : `/artista/${element.id}`}>
      <div className={` ${styles.card} animate__animated animate__fadeInUp`}>
        <div className={ styles.imgContainer}>
          <img src={element.image} alt={`${element.name} profile image`} />
        </div>
        <span>{ element.name }</span>
        <span>{ element.date ? element.date : '' }</span>
      </div>
    </Link>
  )
}

export default Card;