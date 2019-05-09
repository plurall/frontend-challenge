import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text } from '@plurall/elo'

const GenreList = genres => (
  <ul>
    <Heading size="small">Lista de gêneros</Heading>
    {genres.data.map(genre => (
      <li key={genre}>
        <Text>{genre}</Text>
      </li>
    ))}
  </ul>
)
GenreList.propTypes = {}

export default GenreList
