import IAlbum from "../../../types/Spotify/Album";

interface IProps {
  albums: IAlbum[];
}

const ArtistAlbum = ({ albums }: IProps) => {
  return (
    <div className="artist-albums">
    <h2>Álbuns</h2>
    <div className="albums-list">
      {albums.map((album: IAlbum) => (
        <div 
          key={album.id} 
          className="album-card"
          data-testid="album-card"
          data-cy="album-card"
        >
          <img src={album.images[0]?.url} alt={album.name} className="album-image" />
          <div className="album-info">
            <p className="album-name">{album.name}</p>
            <p className="album-release-date">
              {new Date(album.release_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ArtistAlbum;