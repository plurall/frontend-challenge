import PropTypes from 'prop-types'
import React from 'react'

import { ArrowButton, Breadcrumb, Heading, Link } from 'plurall-ui'

import styles from './SubHeader.module.css'

const SubHeader = ({ buttonHref, breadcrumb, heading }) => (
  <div className={styles.header}>
    <div className={styles.wrapper}>
      {buttonHref ? (
        <Link href={buttonHref} className={styles.button}>
          <ArrowButton direction="left" />
        </Link>
      ) : (
        null
      )}

      <div className={styles.innerDiv}>
        <Breadcrumb content={breadcrumb} className={styles.breadcrumb} />
        {heading ? (
          <Heading className={styles.heading}>{heading}</Heading>
        ) : (
          null
        )}
      </div>
    </div>
  </div>
)

SubHeader.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    }),
  ),
  buttonHref: PropTypes.string,
  heading: PropTypes.string,
}

export default SubHeader
