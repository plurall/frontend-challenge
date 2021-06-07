import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { SubHeader } from 'components';
import Album from 'components/Album';
import { SomosClient } from 'utils';

import globalStyles from 'App.module.css';
import styles from './Artist.module.css'
import './stars.css'

import noAvatar from '../../assets/noAvatar.jpg';
import { FiArrowLeftCircle } from 'react-icons/fi'

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
  
  // Choose one random image to use
  const imageIndex = Math.floor(Math.random() * images.length);
  const avatarUrl = images.length ? images[imageIndex].url : null;
  

  return (
    <React.Fragment>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Somos Front-end Challange"
      />
      <div className={globalStyles.container}>
        <Link to="/busca">
          <FiArrowLeftCircle className={styles.goBack} />
        </Link>
        <div className={styles.artistWrapper}>
          {/* Picture */}
          <img className={styles.artistAvatar} src={avatarUrl || noAvatar} />

          {/* Name */}
          <h2 className="artist-name">{name}</h2>

          {/* Popularity */}
          <div className={styles.popularityContainer}>
            <div className="ratings">
              <div className="empty-stars"></div>
              <div className="full-stars" style={{ width: `${popularity}%` }}></div>
            </div>
          </div>

          {/* Genres */}
          <div className={styles.genreContainer}>
            <span className={styles.genreTitle}>Gêneros</span>
            <div className={styles.genreList}>
              {genres.map((genre, i) => <span key={i} className={styles.genre}>{genre}</span>)}
            </div>
          </div>

          {/* Albums */}
          <div className={styles.albumList}>
            {albums.map((album, i) => <Album album={album} key={i} />)}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Artist
