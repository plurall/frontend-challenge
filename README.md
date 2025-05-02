## Somos Educação - Plurall
### Frontend Challenge Reactjs

- **Detalhes do Desafio**: [CHALLENGE.md (informações do desafio)](https://github.com/franklinsales/frontend-challenge-reactjs/blob/master/CHALLENGE.mdhttp:// "CHALLENGE.md (informações do desafio)")

# Sobre Esse Repositório
### Tecnologias
- O projeto foi desenvolvido utilizando: ReactJS + Typescript + SASS + Vite
- O Projeto possui testes do tipo: e2e utilizando Cypress.
- O Gerenciamento de pacotes é com o NPM. Foi utilizado: NodeJS v22.14.0 (LTS) e npm: 10.9.2

Não é necessário docker ou bancos de dados. Essa aplicação é o frontend se comunicando com a API do Spotify.

### Como Começar?
1. Comece clonando o projeto. 😅
1. Acesse o projeto e execute: `npm install`

3. ** === ANTES DE EXECUTAR === **
É necessário configurar o seu arquivo `.env`. Para isso basta:
Spotify Developer [(Acessar Aqui)](https://developer.spotify.com/ "(Acessar Aqui)") e lá obter o seu *CLIENT_ID* e o *REDIRECT_URI*. 
**Obs.: O seu REDIRECT_URI TEM QUE SER  http://127.0.0.1:5173/**
[![Dados para o .env](https://github.com/franklinsales/frontend-challenge-reactjs/blob/master/docs/env-data.png?raw=true "Dados para o .env")](https://github.com/franklinsales/frontend-challenge-reactjs/blob/master/docs/env-data.png?raw=true "Dados para o .env")

1. Acesse o arquivo` .env-example`, configure ele com o **CLIENT_ID** e **REDIRECT_URI**.
1. Agora mude o nome do arquivo ` .env-example` para somente `.env`
1. Após isso você deve executar o projeto com o comando: `npm run dev`


O projeto irá rodar por padrão em: http://127.0.0.1:5173/, então basta acessar esse endereço.

### Como Executar os Testes.

** === ANTES DE MAIS NADA === **
É necessário você configurar as suas credenciais do Spotify no Cypress para que ele possa executar os testes automáticos e2e. Para isso basta 

1. Pegar a o seu **CLIENT_SECRET** no seu painel do Spotify:
[![Spotify CLIENT_SECRET](https://github.com/franklinsales/frontend-challenge-reactjs/blob/master/docs/cypress-data.png?raw=true "Spotify CLIENT_SECRET")](https://github.com/franklinsales/frontend-challenge-reactjs/blob/master/docs/cypress-data.png?raw=truehttp:// "Spotify CLIENT_SECRET")

1. Agora abrar o arquivo: `./cypress.env-copy.json` adicione os valores de **CLIENT_SECRET**, **SPOTIFY_CLIENT_ID** e o **SPOTIFY_REDIRECT_URI**
1. Agora mude o nome do arquivo `./cypress.env-copy.json` para `./cypress.env.json` (ou seja, remover o ***copy* ** do nome)
1. Agora no terminal basta executar: `npx cypress open`

Então o Cypress será excutado, talvez na primeira vez você tenha que fazer algumas confirmações em janelas de diálogos que aparecerão, mas é algo bem simples. **Recomendo deixar tudo padrão.**

