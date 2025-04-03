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

Você precisa ter [Node 16.13.1](https://nodejs.org/en/) (ou compatível) instalado para conseguir rodar o desafio.

Faça fork do projeto em sua conta pessoal e siga os passos a seguir.

### Adicione o url do Plurall no seu `/etc/hosts`.

No Mac/Linux, faça:

```shell
echo '127.0.0.1\tboilerplate.local.plurall.net' | sudo tee -a /etc/hosts
```

No windows, siga esse [tutorial](https://king.host/wiki/artigo/como-editar-o-arquivo-hosts-no-windows/), e adicione a linha `127.0.0.1 boilerplate.local.plurall.net` no arquivo de hosts.

### Instale as dependências e start o projeto

```shell
yarn 
yarn start
```

Após os passos acima, você conseguirá abrir a aplicação em http://boilerplate.local.plurall.net:3000/. Porém, como nossas aplicações são autenticadas com o OAuth, você será redirecionado para o SomosID (nosso serviço de autenticação).

O client_id default não é válido, então você receberá uma mensagem de erro. Para esse desafio, queremos que você utilize a API do Spotify para autenticação.

<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/invalid-client.png">

Como eles também usam OAuth, trocar a configuração do projeto é bem simples.

## Setup Spotify API

- Criar uma aplicação na [API do Spotify](https://developer.spotify.com/dashboard/applications).
- Entrar na aplicação criada, clicar no botão `edit settings` e preencher os seguintes campos abaixo.
- Clicar em `save`.

```
Website: http://boilerplate.local.plurall.net:3000
Redirect URIs: http://boilerplate.local.plurall.net:3000/login/callback
```

<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/redirect.png" width="50%">

- Abrir o arquivo `.env` no `root` do projeto, substituir para esse abaixo, ps: mudando o `REACT_APP_CLIENT_ID` para o `client id` gerado pelo spotify.

```shell
NODE_PATH=src/
REACT_APP_ACCESS_TOKEN_URL=https://accounts.spotify.com/api/token
REACT_APP_AUTHORIZATION_URL=https://accounts.spotify.com/authorize
REACT_APP_CLIENT_ID=YOUR_SPOTIFY_API_CLIENT
REACT_APP_API_URL=https://api.spotify.com/v1
REACT_APP_CALLBACK_URL=http://boilerplate.local.plurall.net:3000/login/callback
```

- Agora você pode stopar o projeto caso esteja rodando, e roda-lo novamente, `yarn start` e quando entrar em `http://boilerplate.local.plurall.net:3000` você vai ser redirecionado para logar no Spotify, você deve estar vendo uma página como essa:

<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/spotify.png" width="50%">

- Logue com suas credenciais, e você será redirecionado para a aplicação :facepunch: :smile: e já deve estar vendo uma página como essa abaixo.

<img src="https://assets.cdn.plurall.net/static/assets/images/frontend-challenge/home.png">

Agora voce já pode fazer o [desafio](/CHALLENGE.md).

Boa Sorte!
