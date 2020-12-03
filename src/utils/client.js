import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

export default api;


// class SomosClient {
//   constructor() {}

//   onError = error => {}

//   async getArtists() {
//     // Obs: para chamadas na api, você já tem o token salvo no Local Storage, `_sp_self_prov_accessToken` - use
//     // ele para mandar no header das chamadas - da uma olhada no `src/utils`
//     // retornar a lista de artistas - https://api.spotify.com/v1/artists?ids=ID_DO_ARTISTA
//   }
// }

// export default SomosClient
