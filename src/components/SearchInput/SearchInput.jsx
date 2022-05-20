import React, { useEffect, useState } from 'react'
import { SomosClient } from '../../utils'
// import Loading from '../Loading'
import Container from './Container/Container'
import styles from './SearchInput.module.css'
import SearchList from './SearchList'
const SearchInput = () => {
  const [searchField, setSearchField] = useState('')
  const [filterArtist, setFilteredArtists] = useState([])

  const client = new SomosClient()

  useEffect(() => {
    if (searchField.length) {
      client.getArtistsName(searchField).then(res => {
        if (res) {
          const filter = res.map(item => ({
            id: item.id,
            name: item.name,
            images: item.images,
          }))
          setFilteredArtists(filter)
        }
      })
    } else {
      setFilteredArtists([])
    }
  }, [searchField])

  const handleChange = e => {
    if (e.target.value.length > 4) {
      setSearchField(e.target.value)
    }
  }

  return (
    <>
      <Container>
        <div className={styles.main}>
          <h2>Busque por um Artista</h2>

          <div className={styles.search}>
            <input
              type="search"
              placeholder="Busque um artista"
              onChange={handleChange}
            />
          </div>

          <div className={styles.rowList}>
            <div className={styles.cardWrap}>
              <div className={styles.card}>
                <SearchList filterArtist={filterArtist} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SearchInput
