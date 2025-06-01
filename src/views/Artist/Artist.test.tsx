import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useSearchArtists } from '../../apis/spotify/queries/useSearchArtists'
import SearchArtist from 'views/SearchArtist'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../apis/spotify/queries/useSearchArtists')
jest.mock('hooks/useDebounce', () => ({
  useDebounce: (value: string) => value,
}))

describe('SearchArtist component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the search input field', () => {
    ;(useSearchArtists as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    })

    render(<SearchArtist />)
    expect(screen.getByLabelText(/buscar artista/i)).toBeInTheDocument()
  })

  it('should show the spinner while loading', () => {
    ;(useSearchArtists as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    })

    render(<SearchArtist />)
    expect(screen.getByLabelText('Loading...')).toBeInTheDocument()
  })

  it('should display artists when results are returned', () => {
    ;(useSearchArtists as jest.Mock).mockReturnValue({
      data: {
        artists: {
          items: [
            { id: '1', name: 'Artist 1', images: [{ url: 'http://image1.com' }] },
            { id: '2', name: 'Artist 2', images: [{ url: 'http://image2.com' }] },
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

  it('should show error message if search fails', () => {
    ;(useSearchArtists as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error('Erro'),
    })

    render(<SearchArtist />)

    expect(screen.getByRole('alert')).toHaveTextContent(/erro ao buscar artistas/i)
  })

  it('should show "no artists found" message if list is empty', () => {
    ;(useSearchArtists as jest.Mock).mockReturnValue({
      data: {
        artists: {
          items: [],
        },
      },
      isLoading: false,
      error: null,
    })

    render(<SearchArtist />)

    expect(screen.getByText(/no artists found/i)).toBeInTheDocument()
  })

  it('should update search when user types', async () => {
    ;(useSearchArtists as jest.Mock).mockReturnValue({
      data: {
        artists: {
          items: [{ id: '1', name: 'Artist 1', images: [{ url: 'http://image1.com' }] }],
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

    const input = screen.getByLabelText(/buscar artista/i)
    fireEvent.change(input, { target: { value: 'beatles' } })

    await waitFor(() => {
      expect(screen.getByText(/artist 1/i)).toBeInTheDocument()
    })
  })
})
