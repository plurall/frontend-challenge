import React from 'react'

import { SubHeader, LinkButton } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends React.Component {

  client = new SomosClient()

  exibirPaginaBusca = () => {
    console.log('Clicou em mudar pra busca')
    //return <Redirect  to="/busca/" />
    //this.props.history.push('/busca/');
  }

  // async getDataFromServer(){
  //   let asyncArtistas = this.client.getArtists('Michael');
  //   let asyncMichaelJackson = this.client.getArtist('3fMbdgg4jU18AjLCKBhRSm');
  //   let AsyncAlbunsMichaelJackson = this.client.getArtistFirstTenAlbums('3fMbdgg4jU18AjLCKBhRSm');
  //   let artistas = await asyncArtistas;
  //   let michaelJackson = await asyncMichaelJackson;
  //   let albunsMichaelJackson = await AsyncAlbunsMichaelJackson;
  //   console.log('passo 2', artistas, michaelJackson, albunsMichaelJackson);
  // }

  componentDidMount(){
    //this.getDataFromServer();
  }

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challenge"
        />
        <div className={styles.wrapper}>
          <h1>Applicativo de busca por artistas no Spotify</h1>
          <LinkButton
            to="/busca" 
            texto="Buscar por artistas"
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Home
