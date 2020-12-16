import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(name) {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${name}&type=artist`,
      {
        method: 'GET',
        headers: {
         'Authorization': 'Bearer '+getToken(),
         'Content-Type': 'application/json'
        }
      }
    );

    const json = await response.json();
    return json.artists;
  }
}

export default SomosClient
