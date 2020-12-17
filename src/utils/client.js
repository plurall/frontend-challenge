import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(name) {
    const url = `https://api.spotify.com/v1/search?q=${name}&type=artist`;
    const access_token = getToken();

    const response = await fetch(url,
      {
        method: 'GET',
        headers: {
         'Authorization': `Bearer ${access_token}`,
         'Content-Type': 'application/json'
        }
      }
    );

    const json = await response.json();
    return json.artists;

  }
}

export default SomosClient
