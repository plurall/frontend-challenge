import { useEffect, useState } from "react";
import { useSpotifyToken } from "../../../hooks/useSpotifyToken";
import { useNavigate } from "react-router-dom";
import { searchArtists } from "../../../utils/client";
import IArtistResponse from "../../../types/Spotify/Artist";
import useLogout from "../../../hooks/useLogout";

interface IProps {
  setArtistsResponse: React.Dispatch<React.SetStateAction<IArtistResponse | null>>;
}

const Searchbar = ({ setArtistsResponse }: IProps) => {
  const navigate = useNavigate();
  const { token } = useSpotifyToken();
  const [query, setQuery] = useState("");
  const { logout } = useLogout();

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
        setIsSearching(true);
        const results = await searchArtists(query, token);
        setArtistsResponse(results);
        // update url with query without reloading the page
        navigate(`?query=${encodeURIComponent(query)}`, { replace: true });
      } else {
        setArtistsResponse(null);
      }
    } catch (error) {
      console.error("Erro ao buscar artistas xxxx:", error);
      logout();
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
        data-testid="search-input"
        data-cy="search-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchArtists();
          }
        }
        }
      />
      <button
        onClick={fetchArtists}
        disabled={isSearching}
        className="search-button"
        data-testid="search-button"
        data-cy="search-button"
        aria-label="Buscar artistas"
      >
        {isSearching ? "..." : "Buscar"}
      </button>
    </div>
  );
};

export default Searchbar;
