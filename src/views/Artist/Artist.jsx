import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import { SubHeader } from 'components';
import { SomosClient } from 'utils';

import { StyleContetWrapper } from 'styles';
import { StyleAlbumList, StyleArtistPicture, StyleArtistWrapper, StyleGenreList, StylePopularityContainer } from './styles';
import './stars.css'

import noAvatar from '../../assets/noAvatar.jpg';
import Album from './Album';

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  const client = new SomosClient();

  useEffect(() => {
    async function getData() {
      const artist = await client.getArtist(id);
      setArtist(artist);
    }
    getData();
  }, [])

  // In case API request still loading, we don't want to show anything yet
  if (!artist) return null;

  const { images, name, genres = [], albums = [], popularity } = artist;

  const imageIndex = Math.floor(Math.random() * images.length);
  const avatarUrl = images.length ? images[imageIndex].url : null;

  return (
    <React.Fragment>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Somos Front-end Challange"
      />
      <StyleContetWrapper>
        <StyleArtistWrapper>
          {/* Picture */}
          <StyleArtistPicture src={avatarUrl || noAvatar} />

          {/* Name */}
          <h2 className="artist-name">{name}</h2>

          {/* Popularity */}
          <StylePopularityContainer>
            <div className="ratings">
              <div className="empty-stars"></div>
              <div className="full-stars" style={{ width: `${popularity}%` }}></div>
            </div>
          </StylePopularityContainer>

          {/* Genres */}
          <StyleGenreList>
            <span className="title">Gêneros</span>
            <div className="list">
              {genres.map((genre, i) => <span key={i} className="genre">{genre}</span>)}
            </div>
          </StyleGenreList>

          {/* Albums */}
          <StyleAlbumList>
            {albums.map((album, i) => <Album album={album} key={i} />)}
          </StyleAlbumList>
        </StyleArtistWrapper>
      </StyleContetWrapper>

    </React.Fragment>
  )
}

export default Artist
