import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MusicSearchIcon from "@assets/icons/MusicSearchIcon";
import IArtistResponse, { IArtist } from "@/types/Spotify/Artist";
import { searchArtists } from "@utils/client";
import { useSpotifyToken } from "@hooks/useSpotifyToken";
import useLogout from "@hooks/useLogout";

interface IProps {
  artistsResponse: IArtistResponse | null;
  setArtistsResponse: React.Dispatch<React.SetStateAction<IArtistResponse | null>>;
}

const SearchResults = ({ artistsResponse, setArtistsResponse }: IProps) => {
  const navigate = useNavigate();
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { token } = useSpotifyToken();
  const { logout } = useLogout();

  const handleArtistClick = (artistId: string) => {
    navigate(`/artista/${artistId}`);
  };

  const loadMore = async () => {
    if (!artistsResponse?.next) return;

    try {
      setIsLoadingMore(true);
      if(!token) {
        console.error("Token não encontrado");
        return;
      }
      const nextResults = await searchArtists("", token, artistsResponse.next);
      setArtistsResponse((prev) => ({
        ...nextResults,
        items: [...(prev?.items || []), ...nextResults.items],
      }));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      logout();
    } finally {
      setIsLoadingMore(false);
    }
  };

  if (!artistsResponse?.items || artistsResponse.items.length === 0) {
    return (
      <div className="search-no-results">
        <MusicSearchIcon width="100px" height="100px" fill="#cfcfcf" />
        <p className="search-no-results-text">Busque por artistas</p>
        <p className="search-no-results-text">Nenhum artista encontrado</p>
      </div>
    );
  }

  return (
    <div className="search-resultados-container">
      <div className="search-resultados">
        {artistsResponse.items.map((artist: IArtist) => (
          <div
            key={artist.id}
            className="search-artist"
            data-testid="search-artist"
            data-cy="search-artist"
            onClick={() => handleArtistClick(artist.id)}
          >
            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              className="search-artist-image"
            />
            <p className="search-artist-name">{artist.name}</p>
          </div>
        ))}
      </div>
      {artistsResponse.next && (
        <div className="load-more-container">
          <button
            className="load-more-button"
            onClick={loadMore}
            disabled={isLoadingMore}
            data-testid="load-more-button"
            data-cy="load-more-button"
          >
            {isLoadingMore ? "Carregando..." : "Carregar Mais"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;