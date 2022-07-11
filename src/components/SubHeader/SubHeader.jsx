import PropTypes from 'prop-types'
import React from 'react'

import { ArrowButton, Breadcrumb, Heading, Link } from 'plurall-ui'

import styles from './SubHeader.module.scss'

const SubHeader = ({ buttonHref, breadcrumb, heading }) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {buttonHref && (
          <Link href={buttonHref} className={styles.button}>
            <ArrowButton direction="left" />
          </Link>
        )}

        <div className={styles.innerDiv}>
          <Breadcrumb content={breadcrumb} className={styles.breadcrumb} />
          <Heading className={styles.heading}>{heading}</Heading>
        </div>
      </div>
    </header>
  )
}

SubHeader.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    }),
  ),
  buttonHref: PropTypes.string,
  heading: PropTypes.string.isRequired,
}

export default SubHeader
