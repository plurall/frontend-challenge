import React, { ReactNode } from 'react'
import * as styles from './Wrapper.module.scss'
interface IProps {
  children: ReactNode
}

const Wrapper: React.FC<IProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
