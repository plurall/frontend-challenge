import React from 'react'
import styles from './Loader.module.css';

class Loader extends React.Component {

  render() {
    return (
        <div className={styles.loaderBox}>
            <div className={styles.loader}></div>
            {this.props.texto}
        </div>
    )
  }
}

export default Loader;