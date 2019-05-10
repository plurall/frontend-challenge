import React, { Component } from 'react';
import {  TextBox } from '@plurall/elo';
import SomosClient from '../../utils/client';

export class Busca extends Component {
  constructor() {
    super()
    this.client = new SomosClient()
  }
  state = {
    artistas: {
      items: [],
      next: [],
      isLoading: false
    }
  }

  buscarArtista = async (textInput) => {
    if(textInput.length>4) {
      this.setState({isLoading: true})
      console.log('fetchData.artists')
       let fetchData = await this.client.getArtists(textInput)
       if(!fetchData.artists) return false
      let { items, next} = fetchData.artists
      this.setState({artistas: {items, next, isLoading: false}})
    }
  }
  
    render() {
      let items = this.state.artistas.items;
      return (
        
        <div>
          {this.state.artistas.isLoading ? <h1>oi</h1> : <h1>tchau</h1>}
          <TextBox label="Digite o nome" onChange={this.buscarArtista}></TextBox>
          {items && items.map((element, index)=>{
            element = items[index]
            console.log(element.images[0] ? element.images[0].url : '')
            return(<div>
              <img src={element.images[0] ? element.images[0].url : 'https://bit.ly/2PYBAXl'}/>
              <div>{element.name}</div>
            </div>)
          })}
        </div>
      )
    }
  }

  export default Busca;