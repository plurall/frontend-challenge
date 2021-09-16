import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { SomosClient } from 'utils'

function Provider({ children }) {
  const [artists, setArtists] = useState([]);
  const [artistFilter, setArtistFilter] = useState([]);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [id, setId] = useState(0);

  const client = new SomosClient()

  const getAllArtists = async () => {
    const artistas = await client.getArtists();
    setArtists(artistas.artists)
  };

  const getAlbumArtist = async (id) => {
    const albumsFilter = await client.getArtistAlbumsById(id)
    if (albumsFilter.items.length > 9) {
      setAlbums(albumsFilter.items.slice(0,9))
    } else {
      setAlbums(albumsFilter.items)
    }
  }

  const search = (event) => {
    const { value } = event.target;
    if (value.length > 3) {
      setName(value);
      setStatus(true);
    } else {
      setName('');
      setArtistFilter([]);
      setStatus(false);
    }
  };

  const handleFilter = () => {
    const filterArtist = artists.filter((artist) => {
      return artist.name.toLowerCase().includes(name.toLowerCase())
    });
    setArtistFilter(filterArtist);
  }

  useEffect(() => {
    handleFilter()
  }, [name, status]);

  useEffect(() => {
    getAllArtists()
  }, []);

  const context = {
    search,
    setLoading,
    getAlbumArtist,
    setId,
    id,
    artists,
    artistFilter,
    status,
    loading,
    albums,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Provider;
