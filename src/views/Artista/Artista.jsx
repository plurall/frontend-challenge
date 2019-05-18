import React, {Component, Fragment} from "react"
import { artists } from "./artists.json"

const {genres, id, images, name, popularity} = artists[0];

const Artista = () => (
  <Fragment>
    <h1>{name}</h1>
    <h2>Popularidade
      <strong>{popularity}</strong>
    </h2>
    {/* <a href={spotyfy}>
    </a> */}
      <img src={images[0].url} alt="Artists"/>
    <ul>
      {genres.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  </Fragment>
)

export default Artista;


// A pagina do Artista deve exibir os seguintes dados:

// Nome
// Popularidade
// Foto
// Lista de gêneros
// Lista de 10 albuns, contendo: Imagem, nome do album e data de lançamento.
// A data de lançamento do album deve estar no formato DD/MM/AAAA.
