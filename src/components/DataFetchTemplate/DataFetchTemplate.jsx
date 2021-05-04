import React from 'react'
import PropTypes from 'prop-types'

import styles from './DataFetchTemplate.module.css'
import Spinner from 'components/Spinner/Spinner'
import { Button } from 'plurall-ui'

const DataFetchTemplate = ({ data, isLoading, hasError, children }) => {
  let page = null

  if (isLoading) {
    page = (
      <div className={styles.feedbackContainer}>
        <Spinner />
      </div>
    )
  }

  if (hasError) {
    page = (
      <div className={styles.feedbackContainer}>
        <h2 className={styles.margin}>Erro ao carregar página</h2>
        <Button
          onClick={() => {
            window.location = '/busca'
          }}
        >
          Ir para busca
        </Button>
      </div>
    )
  }

  if (data && !isLoading && !hasError) {
    page = children
  }

  return <div>{page}</div>
}

DataFetchTemplate.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
}

export default DataFetchTemplate
