import React from 'react';

import { Layout, SubHeader } from 'components'
import { SomosClient } from 'utils'
import Tabela from '../Tabela'

import styles from './Busca.module.css'

class Busca extends React.Component {

    state = {value: ''}
    client = new SomosClient()
    resultadoBusca;

    handleInputChange = async (event) => {

        this.setState({value: event.target.value});
        let inputValue = event.target.value;
        if (inputValue.length >= 4) {
            let resultado = await this.obterArtistas(inputValue);
            if (resultado) {
                this.resultadoBusca = await this.obterArtistas(inputValue);
            }
        }
    };

    obterArtistas = async (filtro) => {
        return await this.client.getArtists(filtro);
    };
    
    render() {
        return(
            <Layout>
                <React.Fragment>
                    <SubHeader
                        breadcrumb={[{ text: 'Busca' }]}
                        heading="Buscar Artistas"
                    />
                    <div className={styles.wrapper}>
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Nome do artista"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <Tabela dados={this.resultadoBusca}/>
                </React.Fragment>
                
            </Layout>
        );
    }
}

export default Busca;
