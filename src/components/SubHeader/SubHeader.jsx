import React from 'react'
import PropTypes from 'prop-types'
import { ArrowButton, Breadcrumb, Heading, Link } from 'plurall-ui'

import styles from './SubHeader.module.css'

const SubHeader = ({ buttonHref, breadcrumb, heading }) => {
  return (
    <div className={styles.header}>
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
    </div>
  )
}

export default SubHeader
