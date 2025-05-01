import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById, getArtistAlbums } from '../../utils/client';
import './Artist.scss';
import IArtist from '../../types/Spotify/Artist';
import IAlbum from '../../types/Spotify/Album';

const Artist: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<IArtist | null>(null);
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          console.error('Token não encontrado');
          return;
        }

        const artistData = await getArtistById(id!, token);
        const artistAlbums = await getArtistAlbums(id!, token, 10);

        setArtist(artistData);
        setAlbums(artistAlbums);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados do artista:', error);
      }
    };

    fetchArtistData();
  }, [id]);

  if (loading) {
    return <div className="artist-loading">Carregando...</div>;
  }

  if (!artist) {
    return <div className="artist-error">Artista não encontrado</div>;
  }

  return (
    <div className="artist">
      <div className="artist-header">
        <img src={artist.images[0]?.url} alt={artist.name} className="artist-photo" />
        <div className="artist-info">
          <h1 className="artist-name">{artist.name}</h1>
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
      <div className="artist-albums">
        <h2>Álbuns</h2>
        <div className="albums-list">
          {albums.map((album: IAlbum) => (
            <div key={album.id} className="album-card">
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
    </div>
  );
};

export default Artist;