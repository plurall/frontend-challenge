import React from 'react'
import { Link } from "react-router-dom"
import styles from './CardArtista.module.css'

class CardArtista extends React.Component {

  /**
   * Retorna a ultima imagem da lista de imagens do 
   * artista de forma a agilizar a exibição de cada 
   * imagem, pois estão ordenadas da melhor pra pior 
   * qualidade. Afinal a lista de artistas oesquisada 
   * pode ser longa
   * @param {} artista 
   */
  getUltimaImagem(artista){
    let lastImage = artista.images[artista.images.length - 1];
    let imagem = null;
    if(!lastImage) lastImage = {};
    if(!lastImage.url) {
      imagem = <div id={`foto_${artista.id}`} className={styles.semFoto}>Sem foto</div>
    }else{
      imagem = <img id={`foto_${artista.id}`} src={lastImage.url} alt={`Artista: ${artista.name}`} ></img>;
    };

    return imagem;
  }

  render() {
    let imagem = this.getUltimaImagem(this.props.artista);

    return (

      <Link to={'/artista/'+ this.props.artista.id}>
        <div className={styles.card} id={`idCardArtista_${this.props.artista.id}`}>
          
            {imagem}
            <div className={styles.container}>
                <h5 className={styles.cardTitle}>
                {this.props.artista.name}
                </h5>
            </div>
          
        </div>
      </Link>
    )
  }
}

export default CardArtista;