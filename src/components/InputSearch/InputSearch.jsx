import React from 'react';
import { TextBox } from '@plurall/elo'
import styles from './InputSearch.module.css'

const PInputSearch = props => (
  <div style={props.styleProps}>
    <TextBox
      label={props.label}
      placeholder={props.placeholder}
      items={[]}
      onClick={item => console.log(item)}
      onChange={e => props.cbOnChange(e)}
    />
  </div>
)

export default PInputSearch
