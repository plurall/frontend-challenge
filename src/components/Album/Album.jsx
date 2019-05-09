import React from 'react'
import { Heading, Text } from '@plurall/elo'

const Album = albumName => (
  <div>
    <ul>
      <Heading size="small">Lista de gêneros</Heading>
      {albumName.data.map(album => (
        <li key={album.id}>
          <img src={album.images[1].url} alt={album.name} />
          <Text>{album.name}</Text>
          <time>{album.release_date}</time>
        </li>
      ))}
    </ul>
  </div>
)

export default Album
