import React, { Component } from 'react';
import {  TextBox } from '@plurall/elo';
import SomosClient from '../../utils/client';
import { Table } from '../../components/index'

export class Artistas extends Component {
  constructor() {
    super()
    this.spotifyRequest = new SomosClient()
  }
  state = {
    artistas: {
      items: [],
      popularity: [],
      genres: [],
    },
    buscaAtiva : false
  }

  buscarArtista = async (textInput) => {
    if(textInput.length > 4) {
      let {artists} = await this.spotifyRequest.getArtists(textInput)
      if(!artists) return this.setState({buscaAtiva: false})
      let { items} = artists
      this.setState({artistas: {items}, buscaAtiva: true})
    }
  }
  
    render() {
      return (
        <div>
          <div className="row">
            <div className="col-5">
              <TextBox label="Digite o nome" onChange={this.buscarArtista}></TextBox>
            </div>
          </div>
          {this.state.buscaAtiva && <Table {...this.state}/>}
        </div>
      )
    }
  }

  export default Artistas;