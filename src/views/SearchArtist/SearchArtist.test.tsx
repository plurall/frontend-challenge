import { render, screen, fireEvent } from '@testing-library/react'
import * as spotifyHooks from '../../apis/spotify/queries/useSearchArtists'
import SearchArtist from './SearchArtist'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

jest.useFakeTimers()

jest.mock('components/ArtistCard/ArtistCard', () => (props: any) => (
  <div data-testid='artist-card'>{props.name}</div>
))

describe('<SearchArtist />', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('renders error message when error occurs', () => {
    jest.spyOn(spotifyHooks, 'useSearchArtists').mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error('API error'),
    })

    render(<SearchArtist />)

    expect(screen.getByRole('alert')).toHaveTextContent('Erro ao buscar artistas')
  })

  test('renders list of artists', async () => {
    jest.spyOn(spotifyHooks, 'useSearchArtists').mockReturnValue({
      data: {
        artists: {
          items: [
            { id: '1', name: 'Artist 1', images: [{ url: 'url1' }] },
            { id: '2', name: 'Artist 2', images: [] },
          ],
        },
      },
      isLoading: false,
      error: null,
    })

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
        },
      },
      isLoading: false,
      error: null,
    })

    render(<SearchArtist />)

    expect(screen.getByText('No artists found.')).toBeInTheDocument()
  })
})
