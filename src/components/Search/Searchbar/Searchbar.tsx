import { useEffect, useState } from "react";
import { useSpotifyToken } from "../../../hooks/useSpotifyToken";
import { searchArtists } from "../../../utils/client";
import IArtist from "../../../types/Spotify/Artist";
import { useNavigate } from "react-router-dom";

interface IProps {
  setArtists: React.Dispatch<React.SetStateAction<IArtist[]>>;
}

const Searchbar = ({ setArtists }: IProps) => {
  const navigate = useNavigate();
  const { token } = useSpotifyToken();
  const [query, setQuery] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("query");
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
            console.error("Token inválido ou expirado. Atualize o token.");
          } else {
            console.error("Erro ao buscar artistas:", error);
          }
        }
      } else {
        setArtists([]);
      }
    } catch (error) {
      console.error("Erro ao buscar artistas:", error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    if (query.length >= 4) {
      const timeoutId = setTimeout(() => {
        fetchArtists();
      }, 500); // Delay de 500ms

      return () => clearTimeout(timeoutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, token]);

  return (
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
        {isSearching ? "..." : "Buscar"}
      </button>
    </div>
  );
};

export default Searchbar;
