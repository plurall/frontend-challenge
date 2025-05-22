<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/plurall-logo.png" width="150" /> <img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/somos-logo.png" width="116" />

# Front-end Challenge

## Objetivo

Nesse desafio iremos avaliar o seu conhecimento nas tecnologias de front-end utilizadas no [Plurall](https://plurall.net) (React, JavaScript, CSS, HTML/JSX).

Você deverá implementar o desafio descrito em [`CHALLENGE.md`](/CHALLENGE.md) usando esse codebase como base.

Esse projeto é um `boilerplate` baseado nos projetos do [Plurall](https://plurall.net) (produto no qual você ira trabalhar).

## Critério de avaliação

Abaixo estão algumas caracteristicas que achamos importantes:

- Organização e legibilidade do código.
- Simplicidade.
- Boas praticas.
- Conhecimento de Javascript.
- Conhecimento de React.
- Outros.

## Configurando o ambiente

Você precisa ter [Node 22.14.0](https://nodejs.org/en/) (ou compatível) instalado para conseguir rodar o desafio.

Faça fork do projeto em sua conta pessoal e siga os passos a seguir.

### Instale as dependências e start o projeto

```shell
yarn
yarn start
```

Após os passos acima, você conseguirá abrir a aplicação em http://127.0.0.1:4200/. Porém, como nossas aplicações são autenticadas com o OAuth, você será redirecionado para o SomosID (nosso serviço de autenticação).

O client_id default não é válido, então você receberá uma mensagem de erro. Para esse desafio, queremos que você utilize a API do Spotify para autenticação.

<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/webpack/invalid-client.png">

Como eles também usam OAuth, trocar a configuração do projeto é bem simples.

## Setup Spotify API

- Criar uma aplicação na [API do Spotify](https://developer.spotify.com/dashboard/applications).
- Na tela da aplicação criada, preencha os seguintes campos abaixo.
- Por fim, clique em `save`.

```
Website: http://127.0.0.1:4200/
Redirect URIs: http://127.0.0.1:4200/login/callback
```

OBS. 1: Não é necessário marcar nenhuma opção em `Which API/SDKs are you planning to use?` mas

OBS. 2: Para Redirec URIs direcionadas para sua máquina, apenas o endereço com ip `https://127.0.0.1:PORT` é aceito pelo spotify, se quiser, saiba mais [aqui](https://developer.spotify.com/documentation/web-api/concepts/redirect_uri).

<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/webpack/redirect.png" width="50%">

- Abrir o arquivo `.env` no `root` do projeto, substituir para esse abaixo, ps: mudando o `REACT_APP_CLIENT_ID` para o `client id` gerado pelo spotify.

```shell
PORT=4200
HOST=127.0.0.1
REACT_APP_NODE_ENV=local
REACT_APP_ACCESS_TOKEN_URL=https://accounts.spotify.com/api/token
REACT_APP_AUTHORIZATION_URL=https://accounts.spotify.com/authorize
REACT_APP_CLIENT_ID=YOUR_SPOTIFY_API_CLIENT
REACT_APP_API_URL=https://api.spotify.com/v1
REACT_APP_CALLBACK_URL=http://127.0.0.1:4200/login/callback
```

- Agora você pode parar o projeto caso esteja rodando, e roda-lo novamente, `yarn start` e quando entrar em `http://127.0.0.1:4200` você vai ser redirecionado para logar no Spotify, você deve estar vendo uma página como essa:

<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/webpack/spotify.png" width="50%">

- Logue com suas credenciais, e você será redirecionado para a aplicação :facepunch: :smile: e já deve estar vendo uma página como essa abaixo.

<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/home.png">

Agora voce já pode fazer o [desafio](/CHALLENGE.md).

Boa Sorte!
