/*
* A interface IAlbum representa um álbum do Spotify.
* Propriedades baseadas na API do Spotify.
* Mais detalhes: https://developer.spotify.com/documentation/web-api/reference/get-an-album
*/
export default interface IAlbum {
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  images: IAlbumImage[];
  album_type: string;
}

export interface IAlbumImage {
  url: string;
  height: number;
  width: number;
}