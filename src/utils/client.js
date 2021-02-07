import { clearToken, getToken } from 'utils'

class SomosClient {

  onError = error => {}

  fazRequisicao(verboHttp, metodoApi){
    
    //pega o token do cookie
    const token = getToken()
    
    //Constroi a URL completa da API do Spotify
    const url = `${process.env.REACT_APP_API_URL}/${metodoApi}`

    return new Promise((resolve, reject) => {
      fetch(url,{
        method: verboHttp,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(
        (resposta) => {
          if(resposta.error){
            if(resposta.error.status === 401){
              clearToken();
            }
            reject(resposta.error);
          }else{
            resolve(resposta);
          }
          
        },
        (erro) => {
          console.error('erro = ', erro);
          reject(erro);
        }
      )
    });
  }

  async getArtists(nomeArtista) {
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    return this.fazRequisicao('GET', `search?q=${nomeArtista}&type=artist`);
  }

  async getArtist(id_artist) {
    return this.fazRequisicao('GET', `artists/${id_artist}`);
  }

  async getAlbums(id_artist) {
    return this.fazRequisicao('GET', `artists/${id_artist}/albums?limit=10&offset=0`);
  }

  /**
   * Retorna apenas 10 albuns do artista solicitado
   * @param {*} id_artist 
   */
  async getArtistFirstTenAlbums(id_artist) {
    return this.fazRequisicao('GET', `artists/${id_artist}/albums?limit=10&offset=0`);
  }
}

export default SomosClient
