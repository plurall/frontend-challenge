import { useState } from "react"

import { SomosClient } from "utils";

// We use the timeout to simuilate a throttle mechanism. 
// By clearing it on every change we make sure we don't send
// multiple API requests unnecessarily.
let timeout;

function useGetArtists() {
  const client = new SomosClient();

  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  const getArtists = e => {
    clearTimeout(timeout); 
    setArtists([]);
    setError(null);
    setNotFound(false);

    if (e.target.value.length < 4) return;
    e.persist();

    timeout = setTimeout(async () => {
      setLoading(true);
      const data = await client.getArtists(e.target.value);
      setLoading(false);

      if (typeof data === 'string') return setError(data);

      if (!data.artists.items.length) return setNotFound(true);

      setArtists(data.artists.items);
    }, 1000)
  }

  return [loading, artists, error, notFound, getArtists]
}


export default useGetArtists