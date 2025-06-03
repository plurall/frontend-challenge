// Importações normais
import React from 'react'
import { render, screen } from '@testing-library/react'
import Artist from './Artist'
import * as useArtistDetailsHook from '../../apis/spotify/queries/useArtistDetails'
import { MemoryRouter } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '123' }),
}))

jest.mock('components/Spinner/Spinner', () => () => <div data-testid='spinner'>Loading...</div>)

describe('Artist Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render error message if error occurs', () => {
    jest.spyOn(useArtistDetailsHook, 'useArtistDetails').mockReturnValue({
      data: undefined,
      isLoading: false,
      error: 'fail',
    })

    render(
      <MemoryRouter>
        <Artist />
      </MemoryRouter>,
    )

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
  })

  it('should render artist and album data correctly', () => {
    const mockData = {
      artist: {
        id: '1',
        name: 'Artista Teste',
        images: [{ url: 'http://img.com/artista.jpg' }],
        popularity: 99,
        genres: ['rock', 'pop'],
      },
      albums: [
        {
          id: 'a1',
          name: 'Álbum 1',
          images: [{ url: 'http://img.com/album1.jpg' }],
          release_date: '2022-01-01',
        },
      ],
    }

    jest.spyOn(useArtistDetailsHook, 'useArtistDetails').mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <Artist />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Artista Teste')
    expect(screen.getByAltText('Artista Teste')).toHaveAttribute(
      'src',
      'http://img.com/artista.jpg',
    )
    expect(screen.getByText(/Popularidade: 99/i)).toBeInTheDocument()
    expect(screen.getByText('rock')).toBeInTheDocument()
    expect(screen.getByText('pop')).toBeInTheDocument()
    expect(screen.getByText('Álbum 1')).toBeInTheDocument()
    expect(screen.getByAltText('Álbum 1')).toHaveAttribute('src', 'http://img.com/album1.jpg')
    expect(screen.getByText('31/12/2021')).toBeInTheDocument()
  })
})
