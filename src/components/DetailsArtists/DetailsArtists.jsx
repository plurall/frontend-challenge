import React from 'react'

import styles from './DetailsArtists.module.css'

const DetailsArtists = ({ resultDetailsArtist }) => {
  const { name, popularity, image, genre } = resultDetailsArtist

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <p>Detalhes Artista</p>
        <p>Nome: {name}</p>
        <p>Popularidade: {popularity}</p>
        <img src={image} alt={`imagem de capa do artista ${name}`} />
        <span>
          Gêneros:
          {genre ? genre.map(item => <p key={item}>{item}</p>) : ''}
        </span>
      </div>
    </React.Fragment>
  )
}

export default DetailsArtists
