import React from 'react'

import PropTypes from 'prop-types'

import styles from './PageTitle.module.scss'

const PageTitle = ({ title }) => {
  const { 'page-title': pageTitle } = styles

  return (
    <span className={pageTitle}>
      {title}
    </span>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle
