import {
  getToken
} from 'utils'

class SomosClient {
  onError = error => {}

  async getArtistas(queryString) {
    return fetch(`https://api.spotify.com/v1/search?q=${queryString}&type=artist`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Erro ao carregar os artistas');
        }
        return response.json();
      })
      .catch(error => {
        throw new Error('Erro ao carregar os artistas');
      })
  }
    async getArtistaAlbums(id) {
      return fetch(`https://api.spotify.com/v1/artists/${id}/albums?limit=10`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Erro ao carregar os álbuns do artista');
          }
          return response.json();
        })
        .catch(error => {
          throw new Error('Erro ao carregar os álbuns do artista');
        })
    }
  async getInfoArtista(id) {
    return fetch(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Erro ao carregar dados do artista');
        }
        return response.json();
      })
      .catch(error => {
        throw new Error('Erro ao carregar dados do artista');
      })
  }

}

export default SomosClient
