import axios from 'axios';
import { token } from './token';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export async function searchAndGetArtists (searchArtist) {
  console.log('Entrei na função pra fazer a chamada');
  const result = await api.get('search', {
    params: {
      q: searchArtist,
      type: 'artist'
    }
  });
  return result;
}

export async function searchAndGetAlbums (params) {
  const result = await api.get(`artists/${params.id}/albums`).then(response => {
    const albums = response.data.items;
    if (albums.length > 10) {
      albums.splice(10);
    }
    return albums;
  });
  return result;
}

export async function getArtistById (params) {
  const result = await api.get(`artists/${params.id}`).then(response => {
    return response;
  });
  return result;
}


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
