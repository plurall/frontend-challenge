import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    state = {}
    render() {
        return (
          <section className="Sidebar">
            {/* <h1>Sidebar</h1> */}
            <nav className="">
              <Link exact to="/">Início</Link>
              <Link to="/busca">Buscar</Link>
              <Link to="/artista/:id">Artista selecionado</Link>
            </nav>
          </section>
        )
    }
}

export default Sidebar
