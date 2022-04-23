import React from 'react'
import styles from './FadeWrapper.module.css'

const FadeWrapper = ({ children, ...props }) => {
  return (
    <div className={styles.fadeWrapper} {...props}>
      {children}
    </div>
  )
}

export { FadeWrapper }
