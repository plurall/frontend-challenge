import React from 'react'
import PropTypes from 'prop-types'

import styles from './ListArtists.module.css'

const ListArtists = ({ results, emptyReturn, viewArtists }) => (
  <React.Fragment>
    {emptyReturn
      ? 'Sem resultados na sua busca'
      : results.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <img src={item.image} alt="imagem" width="100px" />
            <button onClick={() => viewArtists(item.id)}>VER</button>
          </div>
        ))}
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
