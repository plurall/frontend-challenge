import React from 'react'

import { SubHeader, Spinner } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

import styles from './Busca.module.scss'

class Busca extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      term: '',
      msg: '',
      msgError: '',
      loading: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (this.state.term.length > 4 - 1) {
      this.setState({
        msgError: '',
        term: e.target.value,
      })
    }
    this.setState({
      term: e.target.value,
    })
  }

  async handleClick() {
    if (this.state.term.length > 4) {
      this.setState({
        loading: true,
        items: [],
      })

      const { getArtists } = new SomosClient()
      const { artists } = await getArtists(`${this.state.term}`)
      if (artists.items.length === 0) {
        this.setState({
          msg: 'Nenhum artista encontrado',
          loading: false,
        })
      } else {
        setTimeout(() => {
          this.setState({
            items: artists.items,
            loading: false,
            msg: '',
          })
        }, 2000)
      }
    } else {
      this.setState({
        msg: '',
        loading: false,
        msgError: 'Busca deve conter mais de 4 caracteres',
      })
    }
  }

  render() {
    return (
      <>
        <SubHeader breadcrumb={[{ text: 'Home / Busca' }]} heading="" />
        <div className={styles.wrapper}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Digite qual artista deseja buscar"
              onChange={this.handleChange}
            />
            <button onClick={this.handleClick}>Buscar artista</button>
          </div>
          <div className={styles.errorMessages}>
            <p>{this.state.msgError}</p>
            <p>{this.state.msg}</p>
          </div>
          <ul className={styles.cardItems}>
            {!this.state.loading ? '' : <Spinner />}
            {this.state.items.map(item => (
              <li key={item.id}>
                <Link to={`/artista/${item.id}`}>
                  <p>{item.name}</p>
                  <img
                    width="320"
                    height="320"
                    src={
                      item.images[0] !== undefined
                        ? item.images[1].url
                        : './image-placeholder.png'
                    }
                    alt=""
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Busca
