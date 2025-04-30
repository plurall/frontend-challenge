
/*
  * A interface IArtist representa um artista do Spotify.
  * Propriedades baseadas na API do Spotify.
  * Mais detalhes: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artist
  */
export default interface IArtist {
  id: string;
  name: string;
  genres: string[];
  images: IArtistImage[];
  followers: IArtistFollowers;
  popularity: number;
}

export interface IArtistImage {
  url: string;
  height: number;
  width: number;
}

export interface IArtistFollowers {
  total: number;
}