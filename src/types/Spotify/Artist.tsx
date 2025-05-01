/*
  * A interface IArtistResponse representa a resposta da API de busca de artistas.
  * Inclui informações de navegação e a lista de artistas encontrados.
  * Mais detalhes: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artist
  */
export default interface IArtistResponse {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: IArtist[];
}

/*
  * A interface IArtist representa um artista do Spotify.
  * Propriedades baseadas na API do Spotify.
  * Mais detalhes: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artist
  */
export interface IArtist {
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
