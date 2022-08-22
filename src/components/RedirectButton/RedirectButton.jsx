import React from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from './RedirectButton.module.scss'

const Button = ({ title, goTo }) => {
  const { button } = styles

  return (
    <>
      <div>
        <Link className={button} to={goTo}>
          {title}
        </Link>
      </div>
    </>
    )
  }

Button.propTypes = {
  title: PropTypes.string.isRequired,
  goTo: PropTypes.string.isRequired,
}

export default Button
