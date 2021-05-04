import React, { useEffect, useState } from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Button, SearchBox } from 'plurall-ui'

import styles from './Search.module.css'
import TextBox from 'plurall-ui/dist/TextBox/TextBox'

const client = new SomosClient()

const Search = () => {
  const [query, setQuery] = useState('')
  const [displayMessage, setDisplayMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(query), 500)
    return () => clearTimeout(timeOutId)
  }, [query])

  useEffect(() => {
    const getArtists = async () => {
      if (displayMessage != null && displayMessage.length > 3 && !loading) {
        setLoading(true)
        const data = await client.getArtists(displayMessage)
        console.log(data)
        console.log(data.artists.items)
        setArtists(data.artists.items)
        setLoading(false)
      }
    }

    getArtists()
  }, [displayMessage])

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
              <div key={item.id} className={styles.artistItem} onClick={() => alert(item.name)}>
                <img src={imageUrl} alt={item.name} className={styles.image}></img>
                <p>{item.name}</p>
              </div>
            )
          })}
        </div>

        <Button>TESTE</Button>
      </div>
    </React.Fragment>
  )
}

export default Search
