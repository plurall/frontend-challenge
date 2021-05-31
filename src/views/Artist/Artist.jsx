import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import { SubHeader } from 'components';
import { SomosClient } from 'utils';

import { StyleContetWrapper } from 'styles';
import { StyleAlbumList, StyleArtistPicture, StyleArtistWrapper, StyleGenreList, StylePopularityContainer } from './styles';
import { FaStar } from 'react-icons/fa'

import noAvatar from '../../assets/noAvatar.jpg';

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

  const { images, name, genres = [], albums = [] } = artist;

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
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
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
            {albums.map(album => {
              const { images, name, release_date } = album;
              // Get album first image 
              const imageSrc = images[0] ? images[0].url : '';

              return (
                <div className="single-album">
                  <div className="name-date">
                    <h3>{name}</h3>
                    <h4>{release_date}</h4>
                  </div>
                  <img src={imageSrc} alt={`${name}-album-picture`} />
                </div>
              )
            })}
          </StyleAlbumList>
        </StyleArtistWrapper>
      </StyleContetWrapper>

    </React.Fragment>
  )
}

export default Artist
