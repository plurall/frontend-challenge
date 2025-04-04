import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styles from './BackButton.module.scss'

const BackButton = ({ customOnClick, className, history }) => {
  const handleClick = () => {
    if (customOnClick) {
      customOnClick()
    } else {
      history.goBack()
    }
  }

  return (
    <button
      type="button"
      className={`${styles.backButton} ${className}`}
      onClick={handleClick}
      aria-label="Voltar"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 12H5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19L5 12L12 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

BackButton.propTypes = {
  customOnClick: PropTypes.func,
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
}

BackButton.defaultProps = {
  customOnClick: null,
  className: '',
}

export default withRouter(BackButton)
