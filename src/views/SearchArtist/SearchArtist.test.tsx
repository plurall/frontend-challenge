import React from 'react'
import { render, screen } from '@testing-library/react'
import * as spotifyHooks from '../../apis/spotify/queries/useSearchArtists'
import SearchArtist from './SearchArtist'
import { MemoryRouter } from 'react-router-dom'
import type { SpotifySearchArtistsResponse, SpotifyArtist } from 'types/spotify'

jest.mock('components/ArtistCard/ArtistCard', () => (props: any) => (
  <div data-testid='artist-card'>{props.name}</div>
))

interface UseSearchArtistsReturn {
  data?: SpotifySearchArtistsResponse
  isLoading: boolean
  error: string | null
}

describe('<SearchArtist />', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('renders loading spinner when loading', async () => {
    jest.spyOn(spotifyHooks, 'useSearchArtists').mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as UseSearchArtistsReturn)

    render(
      <MemoryRouter>
        <SearchArtist />
      </MemoryRouter>,
    )

    const spinner = await screen.findByTestId('spinner')
    expect(spinner).toBeInTheDocument()
  })

  test('renders error message when error occurs', () => {
    jest.spyOn(spotifyHooks, 'useSearchArtists').mockReturnValue({
      data: undefined,
      isLoading: false,
      error: 'API error',
    } as UseSearchArtistsReturn)

    render(
      <MemoryRouter>
        <SearchArtist />
      </MemoryRouter>,
    )

    expect(screen.getByRole('alert')).toHaveTextContent('Erro ao buscar artistas')
  })

  test('renders list of artists', async () => {
    const mockArtists: SpotifyArtist[] = [
      { id: '1', name: 'Artist 1', images: [{ url: 'url1' }] },
      { id: '2', name: 'Artist 2', images: [] },
    ]

    jest.spyOn(spotifyHooks, 'useSearchArtists').mockReturnValue({
      data: {
        artists: {
          items: mockArtists,
          total: mockArtists.length,
          limit: 20,
          offset: 0,
          href: '',
        },
      },
      isLoading: false,
      error: null,
    } as UseSearchArtistsReturn)

    render(
      <MemoryRouter>
        <SearchArtist />
      </MemoryRouter>,
    )

    expect(screen.getByText('Artist 1')).toBeInTheDocument()
    expect(screen.getByText('Artist 2')).toBeInTheDocument()
  })

  test('renders "No artists found." when artist list is empty', () => {
    jest.spyOn(spotifyHooks, 'useSearchArtists').mockReturnValue({
      data: {
        artists: {
          items: [],
          total: 0,
          limit: 20,
          offset: 0,
          href: '',
        },
      },
      isLoading: false,
      error: null,
    } as UseSearchArtistsReturn)

    render(
      <MemoryRouter>
        <SearchArtist />
      </MemoryRouter>,
    )

    expect(screen.getByText('No artists found.')).toBeInTheDocument()
  })
})
