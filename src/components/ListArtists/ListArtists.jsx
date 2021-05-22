import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'plurall-ui'

import styles from './ListArtists.module.css'

const ListArtists = ({ results, emptyReturn, viewArtists }) => (
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
              <Button onClick={() => viewArtists(item.id)}>VER</Button>
            </span>
          ))}
    </div>
  </React.Fragment>
)

ListArtists.propTypes = {
  results: PropTypes.array.isRequired,
  emptyReturn: PropTypes.bool,
  viewArtists: PropTypes.func.isRequired,
}

ListArtists.defaultProps = {
  emptyReturn: true,
}

export default ListArtists
