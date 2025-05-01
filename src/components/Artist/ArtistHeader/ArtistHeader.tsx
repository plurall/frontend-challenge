import IArtist from "../../../types/Spotify/Artist";

interface IProps {
  artist: IArtist;
}

const ArtistHeader = ({ artist }: IProps) => {
  return (
    <div className="artist-header">
      <img src={artist.images[0]?.url} alt={artist.name} className="artist-photo" />
      <div className="artist-info">
        <h1 
          className="artist-name"
          data-testid="artist-name"
          data-cy="artist-name"
          aria-label="Nome do Artista"
        >
          {artist.name}
        </h1>
        <p className="artist-popularity">Popularidade: {artist.popularity}</p>
        <div className="artist-genres">
          {artist.genres.map((genre: string, index: number) => (
            <span key={index} className="artist-genre">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtistHeader;