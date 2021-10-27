import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SomosClient } from "utils";
import { CardGrid, Layout } from "components";

import styles from "./Artist.module.css"

const Artist = ({ match: { params: { id } } }) => {
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);

  const client = new SomosClient();

  async function handleGetArtist(id) {
    const fetchedArtist = await client.getArtist(id);

    if(!fetchedArtist.id) return;
    
    const newArtist = {
      id: fetchedArtist.id,
      name: fetchedArtist.name,
      popularity: fetchedArtist.popularity,
      image: fetchedArtist.images[0] ? fetchedArtist.images[0].url : 'images/default-icon.png',
      genres: fetchedArtist.genres.join(', ')
    }
    
    console.log(newArtist);
    return newArtist
  }

  async function handleGetArtistAlbums(id) {
    const fetchedAlbums = await client.getArtistAlbums(id);
    console.log(fetchedAlbums);

    if(!fetchedAlbums.items) return;

    const newAlbums = fetchedAlbums.items.map(album => {
      return {
        id: album.id,
        name: album.name,
        date: album.release_date,
        image: album.images[0] ? album.images[0].url : 'images/default-icon.png',
      }
    })

    return newAlbums;
  }

  useEffect(() => {
    handleGetArtist(id).then(artist => setArtist(artist));
    handleGetArtistAlbums(id).then(albums => setAlbums(albums))
  },[])

  return (
    <Layout>
      <div className={ styles.container } >
        <div className={ styles.info } >
          <img src={ artist.image } alt="icon" />
          <div>
            <span className={ styles.name } >{ artist.name }</span>
            <span className={ styles.popularity } > <strong>Popularidade:</strong> { artist.popularity }</span>
            <span className={ styles.genres } > <strong>Gêneros:</strong> { artist.genres }</span>
          </div>
        </div>
        <div className={ styles.albums } >
          <span>Álbuns</span>
          <CardGrid elements={ albums } />
        </div>
      </div>
    </Layout>
  )
}

export default Artist