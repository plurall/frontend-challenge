import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  artistList = {items:[]}

  //Request using fetch
  call($method, $url, $data) {
    const requestOptions = {
      method: $method,
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ getToken()
      }
    };
    return fetch($url+"?"+$data.toString(), requestOptions)
        .then(response => response.json())
        // .then(data => console.log('This is your data', data));
        .then(data => {
          return data;
        })
        .then(error => this.onError());
        
  };
  

  async getArtists($searchKey) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    this.call("GET", "https://api.spotify.com/v1/search", new URLSearchParams({'q':$searchKey, 'type':'artist'}));
  }

}

export default SomosClient
