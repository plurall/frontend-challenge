# Objetivo

O objetivo do desafio é implementar um sistema de busca de artistas baseado na API do Spotify.

O sistema deverá conter 3 páginas:

* A homepage.
* A página de busca (`/busca`).
* A página do artista selecionado (`/artista/:id`).

As chamadas para a API devem ficar restritas ao arquivo `src/utils/client.js`. Os componentes React devem apenas utilizar esse 'client'.

# Descrição das páginas

## Homepage

A homepage deve conter um botão na home que use o `Link` do React para levar a página de busca.

## Busca

A página de busca deve conter um `input` onde o usuário irá digitar a busca.

Ao digitar mais de 4 caracteres, os resultados devem aparecer abaixo, mostrando o nome e a foto do Artista.

Ao clicar em um artista o usuário deve ser levado apara a página do artista.

## Página do Artista

A pagina do Artista deve exibir os seguintes dados:

* Nome
* Popularidade
* Foto
* Lista de gêneros
* Lista de 10 albuns, contendo: Imagem, nome do album e data de lançamento.

A data de lançamento do album deve estar no formato `DD/MM/AAAA`.

# Regras do Desafio

1. Resolva o desafio com o melhor que você possa fazer.
2. Quando finalizar, abra um PR do seu fork para que possamos avaliar.
3. Use o maximo que puder da nossa biblioteca de componentes ([Plurall UI](https://elo.ui.e.plurall.net/)).
4. Faça o layout ser responsivo.
5. Escreva pelo menos um teste.
