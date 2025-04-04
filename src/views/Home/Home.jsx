import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.scss'

const BASE_URL = '/'

const CATEGORIES = [
  {
    id: 'pop',
    name: 'Pop',
    color: '#8c52ff',
    icon: '🎵',
    artist: 'Taylor Swift',
  },
  {
    id: 'rock',
    name: 'Rock',
    color: '#e74c3c',
    icon: '🎸',
    artist: 'Queen',
  },
  {
    id: 'jazz',
    name: 'Jazz',
    color: '#3498db',
    icon: '🎷',
    artist: 'Miles Davis',
  },
  {
    id: 'electronic',
    name: 'Eletrônica',
    color: '#1abc9c',
    icon: '🎛️',
    artist: 'Daft Punk',
  },
  {
    id: 'hip-hop',
    name: 'Hip Hop',
    color: '#f39c12',
    icon: '🎤',
    artist: 'Eminem',
  },
  {
    id: 'indie',
    name: 'Indie',
    color: '#2ecc71',
    icon: '🎹',
    artist: 'Arctic Monkeys',
  },
]

class Home extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  state = {}

  client = new SomosClient()

  navigateToBusca = () => {
    try {
      const { history } = this.props
      history.push(`${BASE_URL}busca`)
    } catch (error) {
      window.location.href = `${BASE_URL}busca`
    }
  }

  navigateToSearch = (artistName) => (e) => {
    e.preventDefault()
    const { history } = this.props
    const searchQuery = encodeURIComponent(artistName)

    try {
      history.push(`${BASE_URL}busca?q=${searchQuery}`)
    } catch (error) {
      window.location.href = `${BASE_URL}busca?q=${searchQuery}`
    }
  }

  render() {
    return (
      <div className={styles.homePage}>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          title="Desafio Front-end do Plurall"
        />

        <div className={styles.wrapper}>
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Descubra novos artistas</h1>
              <p className={styles.heroSubtitle}>
                Milhares de artistas para explorar
              </p>
              <Link to={`${BASE_URL}busca`} className={styles.searchButton}>
                Buscar Artistas
              </Link>
            </div>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Categorias</h2>
            <div className={styles.categoriesGrid}>
              {CATEGORIES.map(category => (
                <a
                  href={`${BASE_URL}busca?q=${encodeURIComponent(category.artist)}`}
                  key={category.id}
                  className={styles.categoryCard}
                  style={{ backgroundColor: category.color }}
                  onClick={this.navigateToSearch(category.artist)}
                >
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <span className={styles.categoryName}>{category.name}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
