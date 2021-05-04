import React, { useCallback, useEffect, useState } from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Button, SearchBox } from 'plurall-ui'

import styles from './Search.module.css'
import TextBox from 'plurall-ui/dist/TextBox/TextBox'
import { getOffsetFromURL } from 'utils/string'

const client = new SomosClient()

const Search = () => {
  const [query, setQuery] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  const [artists, setArtists] = useState([])
  const [pagination, setPagination] = useState({
    previous: null,
    next: null,
  })

  useEffect(() => {
    const timeOutId = setTimeout(() => setCurrentSearch(query), 500)
    return () => clearTimeout(timeOutId)
  }, [query])

  const getArtists = useCallback(
    async (offset = 0) => {
      if (currentSearch != null && currentSearch.length > 3 && !loading) {
        setLoading(true)
        const data = await client.getArtists(currentSearch, offset)
        console.log(data)
        console.log(data.artists.items)
        setArtists(data.artists.items)
        setPagination({
          previous: data.artists.previous,
          next: data.artists.next,
        })
        setLoading(false)
      }
    },
    [currentSearch, loading],
  )

  const onButtonClick = url => {
    const offset = getOffsetFromURL(url)
    getArtists(offset)
  }

  useEffect(() => {
    getArtists()
  }, [currentSearch])

  return (
    <React.Fragment>
      <SubHeader breadcrumb={[{ text: 'Home' }]} heading="Busca" />
      <div className={styles.wrapper}>
        <div style={{ maxWidth: '1144px', width: '100%' }}>
          <TextBox
            onChange={e => setQuery(e)}
            value={query}
            disabled={loading}
          />
        </div>
        {loading && <p>loading</p>}
        <div>
          {artists.map(item => {
            const imageUrl =
              item.images.length > 0
                ? item.images[0].url
                : 'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

            return (
              <div
                key={item.id}
                className={styles.artistItem}
                onClick={() => alert(item.name)}
              >
                <img src={imageUrl} alt={item.name} className={styles.image} />
                <p>{item.name}</p>
              </div>
            )
          })}
        </div>

        <Button
          disabled={pagination.previous == null || loading}
          onClick={() => {
            onButtonClick(pagination.previous)
          }}
        >
          Anterior
        </Button>
        <Button
          disabled={pagination.next == null || loading}
          onClick={() => {
            onButtonClick(pagination.next)
          }}
        >
          Próxima
        </Button>
      </div>
    </React.Fragment>
  )
}

export default Search
