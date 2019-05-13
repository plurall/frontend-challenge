import React from 'react';
import { Button } from '@plurall/elo'
import styles from './Button.module.css'

const {"p-button": pButton} = styles;

const PButton = props => (
  <div className={pButton}>
    <Button type="default">
      {props.children}
    </Button>
  </div>
)

export default PButton
