import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from 'components'
import * as styles from './NotFound.module.scss'

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <div className={styles.notFound}>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está procurando não existe ou foi removida.</p>
        <Link to='/' className={styles.homeLink}>
          Voltar para a página inicial
        </Link>
      </div>
    </Wrapper>
  )
}

export default NotFound
