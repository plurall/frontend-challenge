import React from 'react'
import styles from './Album.module.css';
import { default as FormataData} from './../../utils/formataData';

class Album extends React.Component {

    /**
     * Formata a data string recebida como YYYY-MM-DD pra DD/MM/YYYY
     * @param {Date} data 
     */
    formatarDataPtBr(data = ''){
      return FormataData.toPtBr(data);
    }

    /**
     * Retorna a penultima imagem na lista para que não use a pior qualidade existente nem a melhor
     * @param {*} album 
     * Objeto retornado pelo Spotify com os dados de um album
     */
    getPenultimaImagem(album){
        let indexPenultima = album.images.length > 2? album.images.length - 2: album.images.length - 1; 
        let lastImage = null
        if(indexPenultima >= 0)
        lastImage = album.images[indexPenultima];

        let imagem = null;
        if(!lastImage) lastImage = {};
        if(!lastImage.url) {
        imagem = <div id={`album_${album.id}`} className={styles.semFoto}>Sem capa de album</div>
        }else{
        imagem = <img id={`album_${album.id}`} src={lastImage.url} alt={`Album: ${album.name}`}></img>;
        };

        return imagem;
    }

    render() {

        let imagem = this.getPenultimaImagem(this.props.album);

        return (
            <div className={styles.card}>
            
                {imagem}
                <div className={styles.container}>
                    <h5 className={styles.cardTitle}>
                    {this.props.album.name}
                    </h5>
                    <ul className={styles.lancamento}>
                        <li>Lançamento: {this.formatarDataPtBr(this.props.album.release_date)}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Album;