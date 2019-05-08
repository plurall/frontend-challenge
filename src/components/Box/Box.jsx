import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

import { Artist } from '../../views'

const Box = value => {
  if (value === undefined || value.data.length <= 0) return null

  return (
    <ul>
      {value.data.map(artist => (
        <li key={artist.id}>
          <Link to={`/artista/${artist.id}`} render={Artist}>
            <h1>{artist.name}</h1>
            <img src={artist.images[1].url} alt={artist.name} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Box
