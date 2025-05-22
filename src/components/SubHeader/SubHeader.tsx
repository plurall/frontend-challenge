import React from 'react'

import { ArrowButton, Breadcrumb, Heading, Link } from 'plurall-ui'

import * as styles from './SubHeader.module.scss'

interface BreadcrumbItem {
  text: string
  href?: string
}

interface SubHeaderProps {
  buttonHref?: string
  breadcrumb: BreadcrumbItem[]
  heading: string
}

const SubHeader: React.FC<SubHeaderProps> = ({ buttonHref, breadcrumb, heading }) => {
  const {
    header: style_header,
    wrapper: style_wrapper,
    button: style_button,
    innerDiv: style_innerDiv,
    breadcrumb: style_breadcrumb,
    heading: style_heading,
  } = styles || {}

  return (
    <div className={style_header}>
      <div className={style_wrapper}>
        {buttonHref && (
          <Link href={buttonHref} className={style_button}>
            <ArrowButton direction='left' />
          </Link>
        )}

        <div className={style_innerDiv}>
          <Breadcrumb content={breadcrumb} className={style_breadcrumb} />
          <Heading className={style_heading}>{heading}</Heading>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
