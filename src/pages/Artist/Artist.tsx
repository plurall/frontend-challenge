import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById, getArtistAlbums } from '@utils/client';
import './Artist.scss';
import {IArtist} from '@/types/Spotify/Artist';
import IAlbum from '@/types/Spotify/Album';
import ArtistHeader from '@components/Artist/ArtistHeader/ArtistHeader';
import ArtistAlbum from '@components/Artist/ArtistAlbum/ArtistAlbum';
import useLogout from '@hooks/useLogout';
import LayoutContext from '@/context/Layout/LayoutContext';
import { setErrorMessage } from '@/context/Layout/LayoutAction';

const Artist: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<IArtist | null>(null);
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useLogout();
  const { state: stateLayout, dispatch: dispatchLayout } = useContext(LayoutContext);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const [artistData, artistAlbums] = await Promise.all([
        getArtistById(id!, token),
        getArtistAlbums(id!, token, 10),
      ]);

      setArtist(artistData);
      setAlbums(artistAlbums);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        dispatchLayout(setErrorMessage(stateLayout, "Erro ao buscar informações do artista"));
        logout();
      }
    };

    fetchArtistData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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