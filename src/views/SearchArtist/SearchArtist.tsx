import React, { useState, useCallback } from 'react'
import * as styles from './SearchArtist.module.scss'

import SearchInput from 'components/SearchInput/SearchInput'
import Spinner from 'components/Spinner/Spinner'
import ArtistCard from 'components/ArtistCard/ArtistCard'

import { useSearchArtists } from '../../apis/spotify/queries/useSearchArtists'
import { Link } from 'react-router-dom'
import { useDebounce } from 'hooks/useDebounce'

interface Artist {
  id: string
  name: string
  images: { url: string }[]
}

interface ArtistListProps {
  artists: Artist[]
}

const ArtistList = React.memo(({ artists }: ArtistListProps) => {
  if (!artists.length) return <p>No artists found.</p>

  return (
    <div className={styles.listResults}>
      {artists.map(artist => (
        <Link to={`/artist/${artist.id}`} key={artist.id}>
          <ArtistCard id={artist.id} name={artist.name} imageUrl={artist.images[0]?.url} />
        </Link>
      ))}
    </div>
  )
})

const SearchArtist = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 500)

  const { data: searchResult, isLoading, error } = useSearchArtists(debouncedQuery)

  const handleChange = useCallback((value: string) => {
    setSearchQuery(value)
  }, [])

  return (
    <div className={styles.container}>
      <SearchInput value={searchQuery} changeValue={handleChange} label='Buscar artista' />

      {isLoading && <Spinner />}

      {error && <p role='alert'>Erro ao buscar artistas</p>}

      {searchResult?.artists && <ArtistList artists={searchResult.artists.items} />}
    </div>
  )
}

export default SearchArtist
