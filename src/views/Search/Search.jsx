import { SubHeader } from 'components'
import React, { useState } from 'react'
import { StyleContetWrapper } from 'styles'
import { SomosClient } from 'utils'
import ArtistCard from './ArtistCard'
import { StyleArtistContainer, StyleErrorMessage, StyleSearchInput } from './styles'

let timeout;

const Search = () => {
  const client = new SomosClient();
  

  const [artists, setArtists] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    // We use the timeout to simuilate a throttle mechanism. 
    // By clearing it on every change we make sure we don't send
    // multiple API requests unnecessarily.
    clearTimeout(timeout); 

    setArtists([]);
    setError(null);
    setNotFound(false);
    if (e.target.value.length < 4) return;

    e.persist();

    timeout = setTimeout(async () => {
      const data = await client.getArtists(e.target.value);

      if (typeof data === 'string') return setError(data);

      if (!data.artists.items.length) return setNotFound(true);

      setArtists(data.artists.items);
    }, 1000)
  }

  return (
    <React.Fragment>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Somos Front-end Challange"
      />
      <StyleContetWrapper>
        <h1>Pesquisar artista</h1>

        <StyleSearchInput
          onChange={handleChange}
          haveResults={artists.length || notFound || error}
          placeholder="Nome do artista"
        />
        <StyleArtistContainer>
          <StyleErrorMessage>
            {error}
            {notFound && 'Sorry, we coudn\'t find the artist that you are looking for :('}
          </StyleErrorMessage>

          {/* Sort by populatity before mapping */}
          {artists.sort(artist => artist.popularity).map(a =>
            <ArtistCard key={a.id} artist={a} />
          )}
        </StyleArtistContainer>
      </StyleContetWrapper>

    </React.Fragment>
  )
}

export default Search
