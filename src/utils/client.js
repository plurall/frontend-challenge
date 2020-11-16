import { clearToken, getToken } from 'utils'
import $ from 'jquery';
import logo from '../assets/images/notFound.jpg'

class SomosClient {

  constructor() { }

  onError = error => { }

  async getArtists(artistName, callback) {
    const token = getToken();
    console.log(token);
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=10`,
      method: "GET",
      dataType: "Json",
      headers: {
        Authorization: `Authorization: Bearer ${token}`
      }
    }).then((data) => {
      console.log('buscado');
      const searchedArtists = []
      data.artists.items.forEach(artist => {
        searchedArtists.push({ id: artist.id, name: artist.name, image: artist.images.length > 0 ? artist.images[0].url : logo });
      });
      if (callback)
        callback(searchedArtists);
      return searchedArtists;
    }).catch((error) => {
      if (callback)
        callback(error);
      return error;
    })
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }

  async getArtist(artistId, callback) {
    const token = getToken();
    console.log(token);
    return $.ajax({
      url: `https://api.spotify.com/v1/artists/${artistId}`,
      method: "GET",
      dataType: "Json",
      headers: {
        Authorization: `Authorization: Bearer ${token}`
      }
    }).then((data) => {
      if (callback)
        callback(data);
      return data;
    }).catch((error) => {
      if (callback)
        callback(error);
      return error;
    })
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }

  async getAlbumsByArtist(artistId, callback) {
    const token = getToken();
    console.log(token);
    return $.ajax({
      url: `	https://api.spotify.com/v1/artists/${artistId}/albums?market=ES&limit=10`,
      method: "GET",
      dataType: "Json",
      headers: {
        Authorization: `Authorization: Bearer ${token}`
      }
    }).then((data) => {
      if (callback)
        callback(data);
      return data;
    }).catch((error) => {
      if (callback)
        callback(error);
      return error;
    })
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }

  async getProfile(callback) {
    const token = getToken();
    console.log(token);
    return $.ajax({
      url: `	https://api.spotify.com/v1/me`,
      method: "GET",
      dataType: "Json",
      headers: {
        Authorization: `Authorization: Bearer ${token}`
      }
    }).then((data) => {
      if (callback)
        callback(data);
      return data;
    }).catch((error) => {
      if (callback)
        callback(error);
      return error;
    })
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }

  async getLastReleases(callback) {
    const token = getToken();
    console.log(token);
    return $.ajax({
      url: `https://api.spotify.com/v1/browse/new-releases?country=BR&limit=6`,
      method: "GET",
      dataType: "Json",
      headers: {
        Authorization: `Authorization: Bearer ${token}`
      }
    }).then((data) => {
      if (callback)
        callback(data);
      return data;
    }).catch((error) => {
      if (callback)
        callback(error);
      return error;
    })
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }

}

export default SomosClient
