import SearchFilter from 'components/SearchFilter/SearchFilter'
import React, { useState } from 'react'
import { SomosClient } from 'utils'

const client = new SomosClient()
const Search = () => {
  const [artists, setArtists] = useState([])
  const handleGetArtist = async name => {
    if (name.length > 4) {
      const data = await client.getArtists(name)
      setArtists(data.artists.items)
      console.log(data)
    }
  }
  return (
    <div>
      <SearchFilter onChange={handleGetArtist} />
      {artists?.length > 0 ? (
        <div>
          <ul>
            {artists?.map(artist => (
              <li>
                <img alt={artist.name} src={artist.images[0]?.url} />
                {artist.name}
              </li>
            ))}
          </ul>
        </div>) : (<div>Sem resultado</div>)}
    </div>
  )
}

export default Search
