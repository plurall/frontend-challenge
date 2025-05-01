import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchArtists } from '../../utils/client';
import './Search.scss';
import IArtist from '../../types/Spotify/Artist';
import { useSpotifyToken } from '../../hooks/useSpotifyToken';


const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [artists, setArtists] = useState<IArtist[]>([]);
  const navigate = useNavigate();
  const { token } = useSpotifyToken();

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('query');
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  const fetchArtists = async () => {
    try {
      if (query.length > 1 && token) {
        try {
          setIsSearching(true);
          const results = await searchArtists(query, token);
          setArtists(results);
            // update url with query without reloading the page
            navigate(`?query=${encodeURIComponent(query)}`, { replace: true });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          if (error.response?.status === 401) {
            console.error('Token inválido ou expirado. Atualize o token.');
          } else {
            console.error('Erro ao buscar artistas:', error);
          }
        }
      } else {
        setArtists([]);
      }
    } catch (error) {
      console.error('Erro ao buscar artistas:', error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if(!token) return;
    if(query.length >= 4) {
      const timeoutId = setTimeout(() => {
        fetchArtists();
      }, 500); // Delay de 500ms

      return () => clearTimeout(timeoutId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, token]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (query.length > 4) {
          navigate(`/artist/${artists[0]?.id}`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }
  , [query, artists, navigate]);

  const handleArtistClick = (artistId: string) => {
    navigate(`/artista/${artistId}`);
  };

  return (
    <div className="search">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Busque por artistas"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button 
          onClick={fetchArtists} 
          disabled={isSearching}
          className="search-button" 
        >

          {isSearching ? '...' : 'Buscar'}

        </button>
      </div>
      <div className="search-resultados">
        {artists.map((artist: IArtist) => (
          <div
            key={artist.id}
            className="search-artist"
            onClick={() => handleArtistClick(artist.id)}
          >
            <img src={artist.images[0]?.url} alt={artist.name} className="search-artist-image" />
            <p className="search-artist-name">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;