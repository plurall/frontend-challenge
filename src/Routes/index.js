import React from 'react'
import { useRoutes } from 'hookrouter'

import Home from '../views/Home'
import Search from '../views/Search'
import Artist from '../views/Artist'

const routes = {
  '/': ()=> <Home />,
  '/search': () => <Search />,
  '/artist/:id': ({id}) => <Artist id={id}/>
}

const manager = () => {
  return useRoutes(routes)
}

export default manager