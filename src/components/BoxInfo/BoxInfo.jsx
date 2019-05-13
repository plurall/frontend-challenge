import React, { Component } from 'react'
import { CardCustom, CardComponent } from 'components'
import { Text } from '@plurall/elo'

//const { 'p-box': pBox } = styles
export default class BoxInfo extends Component {
  getImage = function(images) {
    return images.length > 0 ? images[0].url : ''
  }
  getGenero = function(generos) {
    return generos.join(', ')
  }
  getDate = function(date) {
    return new Date(date)
      .toISOString()
      .substr(0, 10)
      .split('-')
      .reverse()
      .join('/')
  }
  render() {
    const { artista, album } = this.props
    return (
      <div>
        <CardCustom
          styleProps={{
            width: '80%',
            margin: '10px auto',
          }}
          src={this.getImage(artista.images)}
        >
          <Text bold secondary size="big" element="p">
            Nome: {artista.name}
          </Text>
          <Text bold secondary size="big" element="p">
            Popularidade: {artista.followers.total}
          </Text>
          <Text bold secondary size="big" element="p">
            Generos: {this.getGenero(artista.genres)}
          </Text>
          {album.map((e, i) => (
            <CardComponent
              key={i}
              styleProps={{
                width: 400,
                margin: 10,
              }}
              src={this.getImage(e.images)}
              text={e.name}
            >
              <Text bold secondary size="big" element="p">
                Data de lançamento: {this.getDate(e.release_date)}
              </Text>
            </CardComponent>
          ))}
        </CardCustom>
      </div>
    )
  }
}
