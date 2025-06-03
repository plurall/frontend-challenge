import React, { useState, useCallback } from 'react'
import * as styles from './SearchArtist.module.scss'

import SearchInput from 'components/SearchInput/SearchInput'
import Spinner from 'components/Spinner/Spinner'
import ArtistCard from 'components/ArtistCard/ArtistCard'

import { useSearchArtists } from '../../apis/spotify/queries/useSearchArtists'
import { Link } from 'react-router-dom'
import { useDebounce } from 'hooks/useDebounce'
import { BackButton } from 'components/BackButton/BackButton'
import Wrapper from 'components/Wrapper/Wrapper'
interface IArtistProps {
  id: string
  name: string
  images: { url: string }[]
}

interface IArtistListProps {
  artists: IArtistProps[]
}

const ArtistList = React.memo(({ artists }: IArtistListProps) => {
  if (!artists.length) return <p>No artists found.</p>

  return (
    <div className={styles.listResults}>
      {artists.map(artist => (
        <Link to={`/artist/${artist.id}`} key={artist.id}>
          <ArtistCard name={artist.name} imageUrl={artist.images[0]?.url} />
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
    <section className={styles.container}>
      <Wrapper>
        <BackButton />
        <SearchInput value={searchQuery} changeValue={handleChange} label='Buscar artista' />

        {isLoading && (
          <div className={styles.spinnerWrapper}>
            <Spinner />
          </div>
        )}

        {error && <p role='alert'>Erro ao buscar artistas</p>}

        {searchResult?.artists && <ArtistList artists={searchResult.artists.items} />}
      </Wrapper>
    </section>
  )
}

export default SearchArtist
