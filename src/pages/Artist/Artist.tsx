import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById, getArtistAlbums } from '../../utils/client';
import './Artist.scss';
import {IArtist} from '../../types/Spotify/Artist';
import IAlbum from '../../types/Spotify/Album';
import ArtistHeader from '../../components/Artist/ArtistHeader/ArtistHeader';
import ArtistAlbum from '../../components/Artist/ArtistAlbum/ArtistAlbum';

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
      <ArtistHeader artist={artist} />
      <ArtistAlbum albums={albums} />
    </div>
  );
};

export default Artist;