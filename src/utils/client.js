import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {console.log("Erro")}

  searchResult = {}

  //Request using fetch
  call($method, $route, $data="") {
    $data = new URLSearchParams($data)
    const requestOptions = {
      method: $method,
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ getToken()
      }
    };
    return fetch(process.env.REACT_APP_API_URL+$route+($data?"?"+$data.toString():""), requestOptions)
        .then(response => response.json())
        // .then(data => console.log('This is your data', data));
        .then(data => {
          if (!data.error) {
            this.searchResult = data
            // console.log(data)
            return data
          }
          
        })
        .catch(error => this.onError());
        
  };
  
  async searchArtists($searchKey) {
    return await this.call("GET", "/search", {'q':$searchKey, 'type':'artist'})
    
  }

  async getArtist($id) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    return await this.call("GET","/artists/"+ $id)
  
  }

  async getAlbums($id) {
    return await this.call("GET","/artists/"+ $id +"/albums", {'limit': 10})
  
  }

}

export default SomosClient
