import React from 'react'
import { Link } from "react-router-dom";
import styles from './LinkButton.module.css';

class LinkButton extends React.Component {

  render() {
    return (
      <div>
        <Link className={styles.linkButton} to={this.props.to}>{this.props.texto}</Link>
      </div>
    )
  }
}

export default LinkButton;