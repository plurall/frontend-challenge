import React from 'react';

import { Link } from 'react-router-dom'

import styles from './Tabela.module.css'

class Tabela extends React.Component {

    renderOnlyWhenProp(props) {
        let dados = props.dados;
        if (dados) {

            return dados.items.map(item => (
                <LinhaTabela key={item.id} dadosLinha={item} />
            ));
        } 
        
    }

    render() {
        return(
            <div >
                {this.renderOnlyWhenProp(this.props)}
            </div>
        );
        
    }
}

const LinhaTabela = (props) => {
   
    return(
        <Link to={`/artista/${props.dadosLinha.id}`}>
            <div className={styles.wrapper}>
                <div className={styles.imagem}>
                    <p> 
                        <img src={props.dadosLinha.images.length > 0 ? props.dadosLinha.images[2].url : ''} alt="Sem Imagem"/>
                    </p>
                </div>
                <div className={styles.nomeArtista}>
                    <p> {props.dadosLinha.name} </p>
                </div>
                
            </div>
        </Link>
    );
}

export default Tabela;