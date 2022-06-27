import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Breadcrumb.module.css'

const Breadcrumb = ({ routes }) => (
  <div>
    <ul className={styles.breadcrumb}>
      {routes.map((route) => (
        <li key={route.url}>
          <Link to={route.url}>
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

Breadcrumb.propTypes = {
  routes: PropTypes.object,
}

export default Breadcrumb

