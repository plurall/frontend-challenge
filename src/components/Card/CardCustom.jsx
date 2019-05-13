import React from 'react'
import { Card } from 'plurall-cards'

const CardComponent = props => (
  <div  style={props.styleProps}>
    <Card icon={<img src={props.src} width="80%" height="400px" />}>
      {props.children}
    </Card>
  </div>
)

export default CardComponent
