import PropTypes from 'prop-types'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import BackButton from '../BackButton/BackButton'

import styles from './SubHeader.module.scss'

const SimpleBreadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null

  return (
    <div className={styles.breadcrumb}>
      {items.map((item, index) => (
        <React.Fragment key={`breadcrumb-item-${item.text}`}>
          {index > 0 && <span className={styles.separator}>/</span>}
          {item.to ? (
            <RouterLink to={item.to} className={styles.breadcrumbLink}>
              {item.text}
            </RouterLink>
          ) : (
            <span className={styles.breadcrumbText}>{item.text}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

SimpleBreadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }),
  ),
}

SimpleBreadcrumb.defaultProps = {
  items: [],
}

const SubHeader = ({ breadcrumb, title, backButton, children }) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      {backButton && (
        <div className={styles.button}>
          <BackButton />
        </div>
      )}
      <div className={styles.innerDiv}>
        <SimpleBreadcrumb items={breadcrumb} />
        <h1 className={styles.heading}>{title}</h1>
        {children}
      </div>
    </div>
  </header>
)

SubHeader.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }),
  ),
  title: PropTypes.string.isRequired,
  backButton: PropTypes.bool,
  children: PropTypes.node,
}

SubHeader.defaultProps = {
  breadcrumb: [],
  backButton: false,
  children: null,
}

export default SubHeader
