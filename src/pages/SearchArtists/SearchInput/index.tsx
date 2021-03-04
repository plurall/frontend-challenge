import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { getArtists } from 'utils'
import * as S from './styles'
import { Artist } from 'utils/types'

type SearchInputProps = {
  setArtists: Dispatch<SetStateAction<Artist[]>>
}

const SearchInput = ({ setArtists }: SearchInputProps) => {
  const [query, setQuery] = useState<string>('')

  const onSearchArtists = useCallback((query: string) => {
    if (query.length > 4) {
      getArtists(query)
        .then((result) => {
          setArtists(result.items)
        })
    } else if (query.length === 0) {
      setArtists([])
    }
  }, [setArtists])

  useEffect(() => {
    onSearchArtists(query)
  }, [onSearchArtists, query])

  const onChangeInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setQuery(query)
  }

  return (
    <S.SearchWrapper>
      <FaSearch />
      <input type={'search'} placeholder={'Busque um artista'} onChange={(e) => onChangeInputSearch(e)}/>
    </S.SearchWrapper>
  )
}

export default SearchInput
