import { useState, useEffect } from 'react'
import { SomosClient } from 'utils'

interface ArtistState {
  isLoading: boolean
  error: string
  artist: any | null
  albums: any[]
}

const INITIAL_STATE: ArtistState = {
  isLoading: true,
  error: '',
  artist: null,
  albums: [],
}

const useArtist = (artistId: string | undefined) => {
  const [artistsState, setArtistsState] = useState<ArtistState>(INITIAL_STATE)
  const spotifyClient = new SomosClient()

  const updateState = (updates: Partial<ArtistState>) => {
    setArtistsState(prevState => ({ ...prevState, ...updates }))
  }

  const fetchArtistData = async () => {
    if (!artistId) {
      updateState({
        error: 'ID do artista não fornecido',
        isLoading: false,
      })
      return
    }

    try {
      updateState({ isLoading: true, error: '' })
      const data = await spotifyClient.getArtist(artistId)
      const { artista, albuns } = data

      if (!artista || !artista.id || !artista.name) {
        updateState({
          error: 'Artista não encontrado',
          isLoading: false,
          artist: null,
          albums: [],
        })
        return
      }

      updateState({
        artist: artista,
        albums: albuns || [],
        error: albuns?.length === 0 ? 'Nenhum álbum encontrado para este artista' : '',
        isLoading: false,
      })
    } catch (error) {
      const { response } = error as { response?: { data: any; status: number } }
      let errorMessage = 'Erro ao carregar dados do artista. Tente novamente.'

      if (response?.status === 404) {
        errorMessage = 'Artista não encontrado'
      }

      updateState({
        error: errorMessage,
        isLoading: false,
        artist: null,
        albums: [],
      })
      console.error('Erro ao buscar dados do artista:', error)
    }
  }

  useEffect(() => {
    fetchArtistData()
  }, [artistId])
  const { isLoading, error, artist, albums } = artistsState
  return { isLoading, error, artist, albums }
}

export default useArtist
