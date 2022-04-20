import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Button } from 'plurall-ui'
import i18n from 'i18n-js'

import styles from './Home.module.css'
import { translate } from './../../locales'
import enUs from './../../images/flags/en-us.svg'
import ptBr from './../../images/flags/pt-br.svg'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  routeChange = () => {
    window.location = '/busca'
  }

  languageChange = locale => {
    sessionStorage.setItem('locale', locale)
    window.location.reload()
  }

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Desafio Front-end do Plurall"
        />
        <div className={styles.wrapper}>
          <div
            className={styles.languageSelector}
            title={translate('home.selecionar_idioma')}
          >
            <button onClick={() => this.languageChange('pt-BR')}>
              <img
                className={
                  i18n.defaultLocale === 'pt-BR' ? styles.languageSelected : ''
                }
                src={ptBr}
                alt=" "
              />
            </button>
            <button onClick={() => this.languageChange('en-US')}>
              <img
                className={
                  i18n.defaultLocale === 'en-US' ? styles.languageSelected : ''
                }
                src={enUs}
                alt=" "
              />
            </button>
          </div>
          <div className={styles.divButton}>
            <span>
              {translate(
                'home.ferramenta_que_efetua_busca_de_artistas_no_spotify',
              )}
            </span>
            <Button onClick={this.routeChange}>
              {translate('home.buscar_artista')}
            </Button>
          </div>
        </div>
      </>
    )
  }
}

export default Home
