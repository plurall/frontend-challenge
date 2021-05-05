import { Button } from 'plurall-ui'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './PaginationButtons.module.css'

const PaginationButtons = ({
  prevDisabled,
  nextDisabled,
  onClick,
  prev,
  next,
}) => (
  <div className={styles.main}>
    <Button disabled={prevDisabled} onClick={() => onClick(prev)}>
      Anterior
    </Button>
    <Button disabled={nextDisabled} onClick={() => onClick(next)}>
      Próxima
    </Button>
  </div>
)

PaginationButtons.propTypes = {
  prevDisabled: PropTypes.bool,
  nextDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  prev: PropTypes.any,
  next: PropTypes.any,
}

export default PaginationButtons
