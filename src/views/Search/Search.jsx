import React, { useCallback, useEffect, useState } from 'react'

import {
  ArtistList,
  CustomTextBox,
  PaginationButtons,
  Spinner,
  SubHeader,
} from 'components'
import { SomosClient } from 'utils'

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
          placeholder="Digite o nome do artista..."
          disabled={loading}
          setCurrentQuery={setCurrentSearch}
          errorMessage={error}
        />

        <div className={styles.margin}>
          {loading ? <Spinner /> : <ArtistList artists={artists} />}
        </div>

        {artists.length > 0 &&
          (pagination.previous != null || pagination.next != null) && (
            <PaginationButtons
              prevDisabled={pagination.previous == null || loading}
              nextDisabled={pagination.next == null || loading}
              onClick={onButtonClick}
              prev={pagination.previous}
              next={pagination.next}
            />
          )}
      </div>
    </React.Fragment>
  )
}

export default Search
