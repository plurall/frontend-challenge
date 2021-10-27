import React, { useEffect, useState } from 'react';

import { ArtistCard, Layout } from 'components';
import styles from './Search.module.css';
import { SomosClient } from 'utils';

const Search = () => {
  const [input, setInput] = useState('');
  const [artists, setArtists] = useState([])
  
  const client = new SomosClient();

  useEffect(() => {
    console.log(artists);
  }, [artists])

  async function handleGetArtists(query, limit = 12) {
    const response = await client.getArtists(query, limit);

    const newArtists = response.artists.items.map((artist) => {
      const artistImage = artist.images[0]
      return {
        id: artist.id,
        name: artist.name,
        image: artistImage ? artistImage.url : '',
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
        <div className="animate__animated animate__fadeInDown" >
          <h1>Pesquise seu artista</h1>
          <input type="text" onChange={handleInput}/>
        </div>

        <div className={ styles.artistGrid }>
          {
            artists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default Search;