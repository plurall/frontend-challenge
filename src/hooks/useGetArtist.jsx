import { useEffect, useState } from "react"
import { SomosClient } from "utils";

function useGetArtist(id) {
  const client = new SomosClient();

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    async function getData() {
      const artist = await client.getArtist(id);
      setArtist(artist);
    }
    getData();
  }, [])

  return [artist]
}


export default useGetArtist