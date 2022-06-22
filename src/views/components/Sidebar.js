import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    state = {}
    render() {
        return (
          <section className="Sidebar">
            <h1>Sidebar</h1>
            <nav className="">
              <Link exact to="/">Home</Link>
              <Link to="/busca" />
              <Link to="/artista/:id" />
            </nav>
          </section>
        )
    }
}

export default Sidebar
