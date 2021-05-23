import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'plurall-ui'
import { Link } from 'react-router-dom'

import styles from './ListArtists.module.css'

const ListArtists = ({ results, emptyReturn }) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      {emptyReturn
        ? 'Sem resultados na sua busca'
        : results.map(item => (
            <span className={styles.card} key={item.id}>
              <img
                src={item.image}
                alt={`imagem de capa do artista ${item.name}`}
              />
              <p>{item.name}</p>
              <span>
                <Link to={`/artista/${item.id}`}>
                  <Button>VER DETALHES</Button>
                </Link>
              </span>
            </span>
          ))}
    </div>
  </React.Fragment>
)

ListArtists.propTypes = {
  results: PropTypes.array.isRequired,
  emptyReturn: PropTypes.bool,
}

ListArtists.defaultProps = {
  emptyReturn: true,
}

export default ListArtists
