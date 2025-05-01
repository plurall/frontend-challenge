

import { useNavigate } from 'react-router-dom';
import IArtist from '../../../types/Spotify/Artist';

interface IProps {
  artists: IArtist[];
}

const SearchResults = ({ artists }: IProps) => {
  const navigate = useNavigate();
  const handleArtistClick = (artistId: string) => {
    navigate(`/artista/${artistId}`);
  };
  return (
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
  );
}

export default SearchResults;