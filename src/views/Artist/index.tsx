import { kStringMaxLength } from 'buffer';
import React from 'react';


import SubHeader from '../../components/SubHeader';

import { SomosClient } from '../../utils';
import style from './Artist.module.css';
import artistPhoto from '../../assets/Henrell.jpg';
import Guriah from '../../assets/guriah.jpeg';
import TouchMe from '../../assets/touchme.jpeg';

const Artist: React.FC = () => {

  const client = new SomosClient();

  return (
    <>
      <SubHeader
        buttonHref="/busca"
        breadcrumb={[{ text: 'Home  >  Busca  >  Artista' }]}
        heading="Somos Front-end Challange"
      />
      <div className={style.container}>
        <h1>Informações do Artista</h1>
        <div className={style.artistCard}>
          <div className={style.artistInfo}>
            <img src={artistPhoto} alt="Foto de Henrell"/>
            <div className={style.artistInfoWords}>
              <h2>Nome: <p>Henrell</p></h2>
              <h2>Popularidade: <p>alta</p></h2>
            </div>
          </div>
          <div className={style.genreInfo}>
            <h2>Gêneros</h2>
            <ul>
              <li><h4>Eletrônica</h4></li>
              <li><h4>Pop</h4></li>
            </ul>
          </div>
          <div className={style.albumsInfo}>
            <h2>Albums</h2>
            <div className={style.albumsCards}>
              <ul>
                <li>
                  <img src={Guriah} alt="Guriah album"/>
                  <div className={style.albumInfoWords}>
                    <h3>Nome do Álbum: <p>Guriah</p></h3>
                    <h3>Data de lançamento: <p>12/12/2019</p></h3>
                  </div>
                </li>
                <li>
                  <img src={TouchMe} alt="TouchMe album"/>
                  <div className={style.albumInfoWords}>
                    <h3>Nome do Álbum: <p>TouchMe</p></h3>
                    <h3>Data de lançamento: <p>12/12/2019</p></h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Artist;
