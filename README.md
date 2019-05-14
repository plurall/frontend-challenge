
# Considerações:
- Usei SCSS ao invés de styled component:

Tenho maior domínio do framework e achei a melhor opção para um projeto rápido como esse
- Optei por baixar o menor número de dependências externas possível
- Algumas coisas não estão feitas da melhor forma por questão de tempo
- Achei baixo o tempo estimado de duas horas, apesar dos problemas que tive com versão de dependência, pra fazer algum minimamente usável levei muito mais tempo que isso.

<img src="https://gitlab.com/sdk12/dms/viewer/video-player/uploads/7aea2a2436087e4ae1d1ec595837f7ce/image.png" width="150" /> <img src="https://gitlab.com/sdk12/dms/viewer/video-player/uploads/e56cb536325ee0e5d3abc645b2defc43/image.png" width="116" />

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

Caso esteja com uma dúvida ou algum impedimento, faça da forma mais simples e continue com o desafio. É mais importante tentar fazer todos os items do desafio do que fazer uma parte de forma elaborada e não fazer outras partes.

## Configurando o ambiente

Você precisa ter [`node LTS ou superior`](https://nodejs.org/en/) instalado para conseguir rodar o desafio.

Faça fork do projeto em sua conta pessoal e siga os passos a seguir.

### Adicione o url do Plurall no seu `/etc/hosts`.

No Mac/Linux, faça:

```shell
echo '127.0.0.1\tboilerplate.local.plurall.net' | sudo tee -a /etc/hosts
```

No windows, siga esse [tutorial](https://king.host/wiki/artigo/como-editar-o-arquivo-hosts-no-windows/), e adicione a linha `127.0.0.1 boilerplate.local.plurall.net` no arquivo de hosts.

### Instale as dependências e start o projeto

```shell
npm install
npm start
```

Após os passos acima, você conseguirá abrir a aplicação em http://boilerplate.local.plurall.net:3000/. Porém, como nossas aplicações são autenticadas com o OAuth, você será redirecionado para o SomosID (nosso serviço de autenticação).

Isso quer dizer que o projeto esta funcionando. Porém, para esse desafio, queremos que você use a API do Spotify para autenticação.

Como eles também usam OAuth, trocar a configuração do projeto é bem simples.

## Setup Spotify API

- Criar uma aplicação na [API do Spotify](https://developer.spotify.com/dashboard/applications).
- Entrar na aplicação criada, clicar no botão `edit settings` e preencher os seguintes campos abaixo.
- Clicar em `save`.

```
Website: http://boilerplate.local.plurall.net:3000
Redirect URIs: http://boilerplate.local.plurall.net:3000/login/callback
```

<img src="https://gitlab.com/sdk12/dms/viewer/video-player/uploads/0c76031294bcc5d1d66f8f49d5d5959a/image.png" width="50%">

- Abrir o arquivo `.env` no `root` do projeto, substituir para esse abaixo, ps: mudando o `REACT_APP_CLIENT_ID` para o `client id` gerado pelo spotify.

```shell
NODE_PATH=src/
REACT_APP_ACCESS_TOKEN_URL=https://accounts.spotify.com/api/token
REACT_APP_AUTHORIZATION_URL=https://accounts.spotify.com/authorize
REACT_APP_CLIENT_ID=YOUR_SPOTIFY_API_CLIENT
REACT_APP_API_URL=https://api.spotify.com/v1
REACT_APP_CALLBACK_URL=http://boilerplate.local.plurall.net:3000/login/callback
```

- Agora você pode stopar o projeto caso esteja rodando, e roda-lo novamente, `npm start` e quando entrar em `http://boilerplate.local.plurall.net:3000` você vai ser redirecionado para logar no Spotify, você deve estar vendo uma página como essa:

<img src="https://gitlab.com/sdk12/dms/viewer/video-player/uploads/a079606592710189199c70e40047c305/image.png" width="50%">

- Logue com suas credenciais, e você será redirecionado para a aplicação :facepunch: :smile: e já deve estar vendo uma página como essa abaixo.

<img src="https://gitlab.com/sdk12/dms/viewer/video-player/uploads/08efbb5473901bed6407900720ce6582/image.png"  width="50%">

Agora voce já pode fazer o [desafio](/CHALLENGE.md).

Boa Sorte!
