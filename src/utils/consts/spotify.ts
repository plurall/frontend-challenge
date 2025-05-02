/*
  * O CLIENT_ID é o ID do cliente do seu aplicativo registrado no painel de desenvolvedor do Spotify.
  * Você pode encontrar o CLIENT_ID na seção "Configurações" do seu aplicativo no painel de desenvolvedor do Spotify.
  * Mais detalhes: https://developer.spotify.com/documentation/general/guides/app-settings/
  */
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

/*
  * O URI de redirecionamento deve ser o mesmo que você configurou no painel de desenvolvedor do Spotify.
  * Certifique-se de que o URI de redirecionamento esteja registrado corretamente no aplicativo do Spotify.
  * Mais detalhes: https://developer.spotify.com/documentation/web-api/tutorials/code-flow
  */
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

/*
  * O escopo 'user-read-private' permite que o aplicativo acesse informações básicas do perfil do usuário, como nome de exibição e imagem do perfil.
  * Você pode adicionar mais escopos conforme necessário, dependendo das permissões que seu aplicativo precisa.
  * Para mais informações sobre os escopos disponíveis, consulte a documentação da API do Spotify: https://developer.spotify.com/documentation/web-api/concepts/scopes"
  */
const SCOPES = 'user-read-private';

export { CLIENT_ID, REDIRECT_URI, SCOPES };