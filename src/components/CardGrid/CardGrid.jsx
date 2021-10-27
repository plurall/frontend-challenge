import React from "react"

import { Card } from "components"

import styles from "./CardGrid.module.css"

const CardGrid = ({ elements }) => {
  return (
    <div className={ styles.grid }>
      {
        elements ? elements.map(element => (
          <Card key={element.id} element={element} />
        )) : ''
      }
    </div>
  )
}

export default CardGrid
