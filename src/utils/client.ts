import IAlbum from "@/types/Spotify/Album";
import IArtistResponse, { IArtist } from "@/types/Spotify/Artist";

const BASE_URL = 'https://api.spotify.com/v1';

const getHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
});

/*
  * Função para buscar artistas no Spotify
  * @param query - O termo de pesquisa para buscar artistas
  * @param token - O token de acesso do Spotify
  * @returns Uma Promise do tipo IArtistResponse, que é uma lista de artistas encontrados
  * @throws Se ocorrer um erro durante a requisição, uma mensagem de erro será exibida no console e
  * a exceção será lançada para ser tratada pelo chamador da função.
  */
export const searchArtists = async (
  query: string,
  token: string,
  url?: string
): Promise<IArtistResponse> => {
  try {
    const response = await fetch(
      url || `${BASE_URL}/search?q=${encodeURIComponent(query)}&type=artist&limit=10`,
      {
        headers: getHeaders(token),
      }
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    const artistResponse: IArtistResponse = {
      href: data.artists.href,
      limit: data.artists.limit,
      next: data.artists.next,
      offset: data.artists.offset,
      previous: data.artists.previous,
      total: data.artists.total,
      items: data.artists.items as IArtist[],
    };
    return artistResponse;
  } catch (error) {
    console.error("Erro ao buscar artistas:", error);
    throw error;
  }
};

/*
  * Função para buscar um artista específico pelo ID
  * @param artistId - O ID do artista a ser buscado
  * @param token - O token de acesso do Spotify
  * @returns Uma Promise do tipo IArtist, que é o artista encontrado
  * @throws Se ocorrer um erro durante a requisição, uma mensagem de erro será exibida no console e
  * a exceção será lançada para ser tratada pelo chamador da função.
  */
export const getArtistById = async (artistId: string, token: string): Promise<IArtist> => {
  try {
    const response = await fetch(`${BASE_URL}/artists/${artistId}`, {
      headers: getHeaders(token),
    });
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar artista por ID:', error);
    throw error;
  }
};

/*
  * Função para buscar os álbuns de um artista específico
  * @param artistId - O ID do artista cujos álbuns serão buscados
  * @param token - O token de acesso do Spotify
  * @param limit - O número máximo de álbuns a serem retornados (padrão: 10)
  * @returns Uma Promise do tipo IAlbum[], que é uma lista de álbuns encontrados
  * @throws Se ocorrer um erro durante a requisição, uma mensagem de erro será exibida no console e
  * a exceção será lançada para ser tratada pelo chamador da função.
  */
export const getArtistAlbums = async (
  artistId: string,
  token: string,
  limit = 10
): Promise<IAlbum[]> => {
  try {
    const response = await fetch(`${BASE_URL}/artists/${artistId}/albums?limit=${limit}`, {
      headers: getHeaders(token),
    });
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    const data = await response.json();
    return data.items as IAlbum[];
  } catch (error) {
    console.error('Erro ao buscar álbuns do artista:', error);
    throw error;
  }
};
