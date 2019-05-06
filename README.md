<img src="https://gitlab.com/sdk12/dms/viewer/video-player/uploads/7aea2a2436087e4ae1d1ec595837f7ce/image.png" width="150" /> <img src="https://gitlab.com/sdk12/dms/viewer/video-player/uploads/e56cb536325ee0e5d3abc645b2defc43/image.png" width="116" />

# Front-end Challenge

## Objetivo

Avaliarmos o seu conhecimento em front-end, aqui vamos passar por React, JavaScript, CSS, HTML/JSX, estamos lhe entregando um `boilerplate` que é baseado nos projetos do [Plurall](https://plurall.net) (produto em qual você ira trabalhar)

Aqui vamos olhar sua organização, boas praticas, conhecimentos em React e Class do JavaScript, conhecimento sobre o framework React, o qual usamos aqui e outras coisinhas a mais.

## Configurando o ambiente para rodar

Você precisa ter [`node LTS ou superior`](https://nodejs.org/en/) instalado para conseguir rodar o teste, fazer fork do projeto em sua conta pessoal e seguir os passos seguintes

- Adicionar `127.0.0.1 boilerplate.local.plurall.net` em seu host ([Mac](https://king.host/wiki/artigo/como-editar-o-arquivo-hosts-no-mac-os-x-apple/)/[Windows](https://king.host/wiki/artigo/como-editar-o-arquivo-hosts-no-windows/)).

```shell
npm install
npm start
```

Apos os passos acima, você consegue abrir a aplicação, em http://boilerplate.local.plurall.net:3000/, porém como nossas aplicações são autenticadas como OAuth, você irá ser redirecionado para logar em nosso autenticador (Somos ID)

Isso quer dizer que tudo esta ok, para continuar, queremos que você use a API do Spotify como modelo, como eles também usam OAuth, a configuração do projeto para trocar o metodo é bem simples. Basta seguir os passos abaixo

### Setup Spotify API

- Criar uma aplicação na [API do Spotify](https://developer.spotify.com/dashboard/applications).
- Entar na aplicação criada, e clicar no botão `edit settings` e preencher os seguintes campos abaixo, logo após clicar em `save`.

```
Website: http://boilerplate.local.plurall.net:3000
Redirect URIs: http://boilerplate.local.plurall.net:3000/login/callback
```

![image](https://gitlab.com/sdk12/dms/viewer/video-player/uploads/0c76031294bcc5d1d66f8f49d5d5959a/image.png)

- Abrir o arquivo `.env` no `root` do projeto, substituir para esse abaixo, ps: mudando o `REACT_APP_CLIENT_ID` para o `client id` gerado pelo spotify.

```shell
NODE_PATH=src/
REACT_APP_ACCESS_TOKEN_URL=https://accounts.spotify.com/api/token
REACT_APP_AUTHORIZATION_URL=https://accounts.spotify.com/authorize
REACT_APP_CLIENT_ID=YOUR_SPOTIFY_API_CLIENT
REACT_APP_API_URL=https://api.spotify.com/v1
REACT_APP_CALLBACK_URL=http://boilerplate.local.plurall.net:3000/login/callback
```

- Agora você pode stopar o projeto caso esteja rodando, e roda-lo novamente, `yarn start` e quando entrar em `http://boilerplate.local.plurall.net:3000` você vai ser redirecionado para logar no Spotify, você deve estar vendo uma página como essa abaixo ![image](https://gitlab.com/sdk12/dms/viewer/video-player/uploads/a079606592710189199c70e40047c305/image.png)
- Logue com suas credenciais, e você será redirecionado para a aplicação :facepumbch: :smile: e já deve estar vendo uma página como essa abaixo ![image](https://gitlab.com/sdk12/dms/viewer/video-player/uploads/08efbb5473901bed6407900720ce6582/image.png)

## Regras

1.  - Siga as intruções em [`INSTRUCTIONS.md`](/INSTRUCTIONS.md).
2.  - Resolva o desafio com o melhor que você possa fazer.
3.  - Quando finalizar, abra um PR do seu fork para nosso avaliar.
4.  - Use o maximo que puder de [https://elo.ui.e.plurall.net/](Plurall UI)
5.  - Layout Responsivo
6.  - Precisa ter pelo menos 1 teste rodando
