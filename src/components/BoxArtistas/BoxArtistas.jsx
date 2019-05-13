import React, { Component } from 'react'
import { CardComponent } from 'components'
import styles from './BoxArtistas.module.css'
import { Link } from 'react-router-dom'
import { Text } from '@plurall/elo'

const { 'p-box': pBox } = styles
export default class BoxArtistas extends Component {
  getImage = function(images) {
    return images.length > 0?images[0].url: ""
  }

  render() {
    const { artistas } = this.props
    return (
      <div className={pBox}>
        {artistas.map((e, i) => (
          <Link
            to={`/artista/${e.id}`}
            key={i}
            style={{ textDecoration: 'none' }}
          >
            <CardComponent
              styleProps={{
                width: 400,
                margin: 10,
              }}
              src={this.getImage(e.images)}
              text={e.name}
            />
          </Link>
        ))}
        {artistas.length == 0 && (
          <Text bold secondary size="big">
            NENHUM RESULTADO ENCONTRADO
          </Text>
        )}
      </div>
    )
  }
}
