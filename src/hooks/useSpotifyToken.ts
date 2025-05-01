import { useEffect, useState } from 'react';
import { generateCodeVerifier, generateCodeChallenge } from '../utils/auth/auth';
import { CLIENT_ID, REDIRECT_URI, SCOPES } from '../utils/consts/spotify';

export const useSpotifyToken = () => {
  const [token, setToken] = useState<string | null>(null);

  const fetchToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const storedVerifier = localStorage.getItem('code_verifier');

    if (!code || !storedVerifier) {
      console.error('Authorization code or code verifier is missing.');
      return;
    }

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: CLIENT_ID,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: REDIRECT_URI,
          code_verifier: storedVerifier,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error(`Error fetching token: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Token:', data.access_token);
      setToken(data.access_token);
      localStorage.setItem('access_token', data.access_token);
      window.history.replaceState({}, '', '/'); // Limpa o ?code da URL
    } catch (error) {
      console.error('Failed to fetch token:', error);
    }
  }

  /*
    * O hook useEffect é usado para verificar se o código de autorização foi retornado na URL
    * após o redirecionamento do Spotify. Se o código estiver presente, ele faz uma solicitação
    * para obter o token de acesso usando o código e o código de verificação armazenado.
    * Se o token já estiver armazenado no localStorage, ele é definido no estado.
    */
  useEffect(() => {
    const existingToken = localStorage.getItem('access_token');
    if (existingToken) {
      setToken(existingToken);
      return;
    }

    fetchToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
   * sem precisar lidar diretamente com a lógica de autenticação.
   */
  return { token, login };
};
