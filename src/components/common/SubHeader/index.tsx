import React from 'react'
import styles from './SubHeader.module.css'
// @ts-ignore
import { ArrowButton, Breadcrumb, Heading, Link } from 'plurall-ui'

type SubHeaderTypes = {
  buttonHref: string
  breadcrumb: {
    text: string
    href: string
  }
  heading: string
}

const SubHeader = ({ buttonHref, breadcrumb, heading }: SubHeaderTypes) => (
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

export default SubHeader
