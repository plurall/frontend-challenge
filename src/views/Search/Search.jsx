import { Input, Sidebar } from 'components'
import React from 'react'
import styles from './Search.module.css'
import { Footer } from 'plurall-footer'

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.main}>
          {/* <Sidebar /> */}
          <div>
            <Input />
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Search
