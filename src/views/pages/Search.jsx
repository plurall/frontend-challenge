import SearchFilter from 'components/SearchFilter/SearchFilter'
import React, { useState } from 'react'
import { SomosClient } from 'utils'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'

import Card from 'components/Cards/Card'
import styles from './Search.module.css'

const client = new SomosClient()
const Search = () => {
const [search, setSearch] = useState(false)
const [artists, setArtists] = useState()
const handleGetArtist = async name => {
    if (name.length > 4) {
      const data = await client.getArtists(name)
      setArtists(data.artists.items)
      setSearch(true)
    }
  }

  const routes = [
    { name: 'Home', url: '/' },
    { name: 'Busca', url: '/busca' },
  ]

  return (
    <div>
      <Breadcrumb routes={routes} />
      <SearchFilter onChange={handleGetArtist} />
      {artists?.length ? (
        <div>
          <ul className={styles.cards}>
            {artists?.map(artist => (
              <Card artist={artist} />
            ))}
          </ul>
        </div>) : (search && (<div>Sem resultado</div>))}
    </div>
  )
}

export default Search
