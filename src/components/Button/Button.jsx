import React from 'react'

import {
  Link,
} from "react-router-dom";

import styles from './Button.module.css';

class Button extends React.Component {

  render() {
    const { route, text } = this.props;

    return (
      <div>
        <Link className={styles.btn} to={route}>{text}</Link>
      </div>
    )
  }
}

export default Button;
