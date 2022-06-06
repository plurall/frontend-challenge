import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SubHeader, SearchCards } from 'components'
import axios from 'axios'
import { getToken } from 'utils'

import styles from './Search.module.css'

const Search = () => {
  const [artists, setArtists] = useState([])
  const [query, setQuery] = useState('')
  const headers = {
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value
    if (value.length >= 4) {
      setQuery(e.target.value)
    }
  }


  useEffect(() => {
    async function getArtists(query) {
      if (!!query) {
        const { data } = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=artist&limit=50&offset=1`, headers)
        return setArtists([data.artists])
      } return
    }
    getArtists(query)
  }, [query])

  return (
    <>
      <SubHeader
        breadcrumb={[]}
        heading="Search Results Page"
      />
      <div className={styles.wrapper}>
        <section>
          <div>
            <form>
              <label>Write the name of artist: </label>
              <input type="text" onChange={(e) => handleInputChange(e)} />
            </form>
          </div>
          {query &&
            <div className={styles.title}>
              <h1>Search Results:</h1>
            </div>
          }
          <div className={styles.cards}>
            {!!artists[0] &&
              artists[0].items.map(artist => (
                <Link to={`/artists/${artist.id}`} key={artist.id} >
                  <SearchCards
                    imageUrl={artist.images}
                    artistName={artist.name}
                    key={artist.id}
                  />
                </Link>
              ))
            }
          </div>
        </section>
      </div >
    </>
  )
}

export default Search
