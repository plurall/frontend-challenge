import { useContext } from 'react';
import { generateCodeVerifier, generateCodeChallenge } from '../utils/auth/auth';
import { CLIENT_ID, REDIRECT_URI, SCOPES } from '../utils/consts/spotify';
import SpotifyContext from '../context/Spotify/SpotifyContext';

export const useSpotifyToken = () => {
  const { state } = useContext(SpotifyContext);

  const isLoggedIn = !!state.token;
  const token = state.token;

  /*
    * A função login é chamada quando o usuário deseja iniciar o processo de autenticação.
    * Ela gera um código de verificação e um desafio de código, armazena o código de verificação
    * no localStorage e redireciona o usuário para a página de autorização do Spotify.
    */
  const login = async () => {
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem('code_verifier', verifier);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: SCOPES,
      redirect_uri: REDIRECT_URI,
      code_challenge_method: 'S256',
      code_challenge: challenge,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  /* o return do hook retorna o token de acesso e a função de login.
   * O token pode ser usado para fazer chamadas à API do Spotify
   * e a função de login pode ser chamada para iniciar o processo de autenticação.
   * Isso permite que o componente que usa esse hook tenha acesso ao token e à função de login
  };
   */
  return { isLoggedIn, login, token };
};
