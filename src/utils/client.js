import axios from 'axios';
import { token } from './token';

/**
 * client.js was totally modified to be modern using 'axios' to make the api calls.
 *
 * const api creates the connection with the baseURL, and through it the other calls
 * can be made
 */

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

/**
 * searchAndGetArtists() is a function to make the api call to get information about
 * artists.
 */

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

/**
 * searchAndGetAlbums() is a function to make the api call to get information about
 * albums from an artist, based in the id in url, gotten by params.
 */

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

/**
 * getArtistById() is a function to make the api call to get information about
 * an artist, based in the id in url, , gotten by params.
 */

export async function getArtistById (params) {
  const result = await api.get(`artists/${params.id}`).then(response => {
    return response;
  });
  return result;
}
