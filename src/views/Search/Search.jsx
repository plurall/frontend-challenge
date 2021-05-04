import React, { useCallback, useEffect, useState } from 'react'

import {
  ArtistList,
  CustomTextBox,
  PaginationButtons,
  SubHeader,
} from 'components'
import { SomosClient } from 'utils'
import { Button } from 'plurall-ui'

import styles from './Search.module.css'
import { getOffsetFromURL } from 'utils/string'

const client = new SomosClient()

const Search = () => {
  const [currentSearch, setCurrentSearch] = useState('')
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const [artists, setArtists] = useState([])
  const [pagination, setPagination] = useState({
    previous: null,
    next: null,
  })

  const getArtists = useCallback(
    async (offset = 0) => {
      if (currentSearch != null && currentSearch.length > 3 && !loading) {
        try {
          setLoading(true)
          setError(null)
          setArtists([])
          const data = await client.getArtists(currentSearch, offset)

          if (data.artists.items.length === 0) {
            setError('Não foi encontrado nenhum artista :(')
          }

          console.log(data)
          console.log(data.artists.items)
          setPagination({
            previous: data.artists.previous,
            next: data.artists.next,
          })
          setArtists(data.artists.items)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(error)
          setArtists([])
          setPagination({ previous: null, next: null })
          console.log(error)
        }
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
      <SubHeader breadcrumb={[{ text: 'Busca' }]} heading="Procurar artistas" />
      <div className={styles.wrapper}>
        <CustomTextBox
          disabled={loading}
          setCurrentQuery={setCurrentSearch}
          errorMessage={error}
        />
        {loading ? <p>loading</p> : <ArtistList artists={artists} />}

        <PaginationButtons
          prevDisabled={pagination.previous == null || loading}
          nextDisabled={pagination.next == null || loading}
          onClick={onButtonClick}
          prev={pagination.previous}
          next={pagination.next}
        />

      </div>
    </React.Fragment>
  )
}

export default Search
