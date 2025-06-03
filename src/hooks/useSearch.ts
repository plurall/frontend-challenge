import { SomosClient } from 'utils'
import { IArtist } from 'interfaces'
import { useCallback, useState } from 'react'
const MINIMUM_SEARCH_LENGTH = 4
const INITIAL_ARTISTS: IArtist[] = []

interface SearchState {
  isLoading: boolean
  error: string
  artists: IArtist[]
  searchTerm: string
}

const useSearch = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    isLoading: false,
    error: '',
    artists: INITIAL_ARTISTS,
    searchTerm: '',
  })

  const spotifyClient = new SomosClient()

  const updateSearchState = useCallback((updates: Partial<SearchState>) => {
    setSearchState(prevState => ({ ...prevState, ...updates }))
  }, [])

  const resetSearch = useCallback(() => {
    updateSearchState({
      artists: INITIAL_ARTISTS,
      error: '',
      isLoading: false,
    })
  }, [updateSearchState])

  const handleSearchArtists = useCallback(
    async (searchTerm: string) => {
      try {
        const response = await spotifyClient.getArtists(searchTerm)
        const artists = response?.artists?.items || INITIAL_ARTISTS

        updateSearchState({
          artists,
          error: artists.length === 0 ? 'Nenhum artista encontrado' : '',
          isLoading: false,
        })
      } catch (error) {
        const { response } = error as { response?: { data: any; status: number } }
        const errorMessage =
          response?.status === 404
            ? 'Artista não encontrado'
            : 'Ocorreu um erro ao buscar artistas. Tente novamente.'

        updateSearchState({
          artists: INITIAL_ARTISTS,
          error: errorMessage,
          isLoading: false,
        })
      }
    },
    [spotifyClient, updateSearchState],
  )

  const handleInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchTerm = event.target.value
      updateSearchState({ searchTerm: newSearchTerm })

      if (newSearchTerm.length === 0) {
        resetSearch()
        return
      }

      if (newSearchTerm.length >= MINIMUM_SEARCH_LENGTH) {
        updateSearchState({ isLoading: true, error: '' })
        await handleSearchArtists(newSearchTerm)
      }
    },
    [handleSearchArtists, resetSearch, updateSearchState],
  )

  const { isLoading, error, searchTerm, artists } = searchState
  return { isLoading, error, searchTerm, artists, handleInputChange }
}

export default useSearch
