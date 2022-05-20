import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CardSearch.module.css'

const CardSearch = ({ nameArts, imagesArts, idArts }: any) => {
  return (
    <>
      <div className={styles.card} key={idArts}>
        <Link to={`/artist/${idArts}`}>
          {imagesArts.length && (
            <img
              src={imagesArts[0].url}
              alt={nameArts}
              width="150px"
              height="150px"
            />
          )}

          <h4>{nameArts}</h4>
        </Link>
      </div>
    </>
  )
}

CardSearch.propTypes = {
  nameArts: PropTypes.string.isRequired,
  imagesArts: PropTypes.arrayOf(PropTypes.object).isRequired,
  idArts: PropTypes.string.isRequired,
}

export default CardSearch
