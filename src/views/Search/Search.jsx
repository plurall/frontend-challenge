import React, { useEffect, useState } from 'react';

import { CardGrid, Layout } from 'components';
import styles from './Search.module.css';
import { SomosClient } from 'utils';

const Search = () => {
  const [input, setInput] = useState('');
  const [artists, setArtists] = useState([])
  
  const client = new SomosClient();

  async function handleGetArtists(query, limit = 12) {
    const response = await client.getArtists(query, limit);

    if(!response.artists) return;

    const newArtists = response.artists.items.map((artist) => {
      const artistImage = artist.images[0]
      return {
        id: artist.id,
        name: artist.name,
        image: artistImage ? artistImage.url : 'images/default-icon.png',
      }
    })

    return newArtists
  }
  
  async function handleInput(event) {
    const newInput = event.target.value.toString()
    if (newInput.length > 3) {
      setArtists(await handleGetArtists(newInput))
    }
  }

  return (
    <Layout>
      <div className={ styles.container }>
        <div>
          <h1 className="animate__animated animate__fadeIn">Pesquise seu artista</h1>
          <input className="animate__animated animate__fadeInUp" type="text" onChange={handleInput}/>
        </div>
        <CardGrid  elements={ artists }/>
      </div>
    </Layout>
  )
}

export default Search;