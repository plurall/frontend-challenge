import { useSpotifyToken } from '../../hooks/useSpotifyToken';
import { useState } from 'react';
import { searchArtists } from '../../utils/client';

function App() {
  const { token, login } = useSpotifyToken();
  const [query, setQuery] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!token) return;
    const res = await searchArtists(query, token);
    setResults(res);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>Spotify Artist Search</h1>

      {!token ? (
        <button onClick={login}>Login with Spotify</button>
      ) : (
        <>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar artista"
          />
          <button onClick={handleSearch}>Buscar</button>

          <ul>
            {results.map((artist) => (
              <li key={artist.id}>
                {artist.images[0] && (
                  <img src={artist.images[0].url} alt={artist.name} width="50" />
                )}
                {artist.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
