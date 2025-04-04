import React, { createContext, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: () => {},
  artists: [],
  setArtists: () => {},
})

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [artists, setArtists] = useState([])
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    const isBuscaPath = pathname === '/busca' || pathname.startsWith('/artista/')

    if (!isBuscaPath) {
      setSearchTerm('')
      setArtists([])
    }
  }, [pathname])

  const value = {
    searchTerm,
    setSearchTerm,
    artists,
    setArtists,
  }

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SearchContext
