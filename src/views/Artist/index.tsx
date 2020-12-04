import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import { useRouteMatch } from 'react-router-dom';
import SubHeader from '../../components/SubHeader';
import api from '../../utils/client';

import style from './Artist.module.css';
import artistPhoto from '../../assets/User_profile2.png';

import { ArtistSearchData, ImageData } from '../Search';

interface ArtistParams {
  id: string;
}

interface ArtistDataInAlbums {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface AlbumsData {
  album_group: string;
  album_type: string;
  artists: ArtistDataInAlbums[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: ImageData[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

const Artist: React.FC = () => {
  const [artistData, setArtistData] = useState<ArtistSearchData>({} as ArtistSearchData);
  const [albumsData, setAlbumsData] = useState<AlbumsData[]>([]);
  const [genresData, setGenresData] = useState<string[]>([]);
  const [imageData, setImageData] = useState<string>('');

  const { params } = useRouteMatch<ArtistParams>();

  useEffect(() => {
    api.get(`artists/${params.id}`).then(response => {
      console.log('artistResponse', response.data);
      setArtistData(response.data);
      setGenresData(response.data.genres);
      if (response.data.images[0] !== undefined) {
        setImageData(response.data.images[0].url);
      }
    });
    api.get(`artists/${params.id}/albums`).then(response => {
      console.log('albumResponse', response.data.items);
      const albums: AlbumsData[] = response.data.items;
      if (albums.length > 10) {
        albums.splice(10);
      }
      setAlbumsData(albums);
      console.log('date', format(parseISO(albums[0].release_date), 'dd/MM/yyyy'));
    });
  },[]);

  return (
    <>
      <SubHeader
        buttonHref="/busca"
        breadcrumb={[{ text: 'Home  >  Busca  >  Artista' }]}
        heading="Somos Front-end Challange"
      />
      <div className={style.container}>
        <h1>Informações do Artista</h1>
        <div className={style.artistCard}>
          <div className={style.artistInfo}>
            {imageData.length > 0 ?
            <img src={imageData} alt={`Foto de ${artistData.name}`}/>
             : <img src={artistPhoto} alt={`Foto de ${artistData.name}`}/>}
            <div className={style.artistInfoWords}>
              <h2>Nome: <p>{artistData.name}</p></h2>
              <h2>Popularidade: <p>{artistData.popularity}</p></h2>
            </div>
          </div>
          <div className={style.genreInfo}>
            <h2>Gêneros</h2>
            <ul>
              {genresData.length > 0 ? artistData.genres.map((genre, index) => (
                <li key={index}><h4>{genre}</h4></li>
              )) : <li><h4>Não há gêneros cadastrados</h4></li>}
            </ul>
          </div>
          <div className={style.albumsInfo}>
            <h2>10 últimos álbums</h2>
            <div className={style.albumsCards}>
              <ul>
                {albumsData.length > 0 ? albumsData.map((album, index) => (
                 <li key={index}>
                  <img src={album.images[0].url} alt={`Imagem do álbum ${album.name}`}/>
                  <div className={style.albumInfoWords}>
                    <h3>Nome: <p>{album.name}</p></h3>
                    <h3>Data de lançamento: <p>{format(parseISO(album.release_date), 'dd/MM/yyyy')}</p></h3>
                  </div>
                </li>
                )) : <li><h4>Não há albums cadastrados</h4></li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Artist;
