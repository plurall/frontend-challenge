import React from 'react'
import PropTypes from 'prop-types';

import styles from './Card.module.css'


const Card = (props) => {

  function validateDate(){
    if(props.artist.release_date){
      const release_date = new Date(props.artist.release_date).toLocaleDateString("pt-BR");
      return `Lançamento ${release_date}`;
    }
    return '';
  }

  return(
    <div className={styles['c-artist']}>
      <div className={styles['c-artist__cover']}>
        <img
          src={(props.artist.images.length > 0 ? props.artist.images[0].url:"")}
          alt={props.artist.name}
          className={styles['c-artist__picture']}
        />
      </div>
      <h1 className={styles['c-artist__title']}>{props.artist.name}</h1>

      <div className={styles['c-artist__date']}>{validateDate()}
      </div>
    </div>
  )

}

Card.propTypes = {
  artist: PropTypes.object.isRequired,
}

export default Card
