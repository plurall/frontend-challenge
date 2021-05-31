import { SubHeader } from 'components'
import React, { useState } from 'react'
import { StyleContetWrapper } from 'styles'
import { SomosClient } from 'utils'
import ArtistCard from './ArtistCard'
import { StyleArtistContainer, StyleSearchInput } from './styles'

const Search = () => {
  const client = new SomosClient();
  let timeout;

  const [artists, setArtists] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleChange = e => {
    if (e.target.value.length < 4) return;
    e.persist();

    // The code below simulates a throttle mechanism;
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      const { artists: { items } } = await client.getArtists(e.target.value);
      if (!items.length) setNotFound(true);
      console.log(items);
      setArtists(items);
    }, 1000)
  }

  return (
    <React.Fragment>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Somos Front-end Challange"
      />
      <StyleContetWrapper>
        <h1>Digitar o nome do artista</h1>

        <StyleSearchInput
          onChange={handleChange}
          haveResults={artists.length && !notFound}
        />
        <StyleArtistContainer>
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
