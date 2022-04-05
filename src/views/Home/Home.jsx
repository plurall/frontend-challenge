import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Button } from 'plurall-ui'

import styles from './Home.module.css'
import { translate } from './../../locales';
import enUs from './../../images/flags/en-us.svg';
import ptBr from './../../images/flags/pt-br.svg';
import i18n from 'i18n-js';

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  routeChange = () => {
    window.location = "/busca"
  }

  languageChange = (locale) => {
    sessionStorage.setItem("locale", locale);
    window.location.reload();
  }

  render() {
    console.log(i18n.defaultLocale);
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <div className={styles.languageSelector} title={translate("home.selecionar_idioma")}>
            <img className={i18n.defaultLocale == "pt-BR" ? styles.languageSelected : ''} src={ptBr} onClick={() => this.languageChange("pt-BR")}></img>
            <img className={i18n.defaultLocale == "en-US" ? styles.languageSelected : ''} src={enUs} onClick={() => this.languageChange("en-US")}></img>
          </div>
          <div className={styles.divButton}>
            <span>{translate('home.ferramenta_que_efetua_busca_de_artistas_no_spotify')}</span>
            <Button onClick={this.routeChange} >{translate('home.buscar_artista')}</Button>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Home
