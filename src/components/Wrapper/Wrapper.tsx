import React from 'react'
import * as styles from './Wrapper.module.scss'

export function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>
}
export default Wrapper
