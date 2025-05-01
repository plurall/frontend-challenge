import { useNavigate } from "react-router-dom";
import IArtist from "../../../types/Spotify/Artist";
import MusicSearchIcon from "../../../assets/icons/MusicSearchIcon";

interface IProps {
  artists: IArtist[];
}

const SearchResults = ({ artists }: IProps) => {
  const navigate = useNavigate();
  const handleArtistClick = (artistId: string) => {
    navigate(`/artista/${artistId}`);
  };

  if (artists.length === 0) {
    return (
      <div className="search-no-results">
        <MusicSearchIcon width="100px" height="100px" fill="#cfcfcf" />
        <p className="search-no-results-text">Busque por artistas</p>
        <p className="search-no-results-text">Nenhum artista encontrado</p>
      </div>
    );
  }

  return (
    <div className="search-resultados">
      {artists.map((artist: IArtist) => (
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
  );
};

export default SearchResults;
