import React from 'react'
import { Card } from 'plurall-cards'
import { Text } from '@plurall/elo'
import styles from './Card.module.css'

const { 'p-card': pCard } = styles
const CardComponent = props => (
  <div className={pCard} style={props.styleProps}>
    <Card icon={<img src={props.src} width="128" height="128" />}>
      <Text bold size="big">
        {props.text}
      </Text>
      {props.children}
    </Card>
  </div>
)

export default CardComponent
