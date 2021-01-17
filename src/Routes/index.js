import React from 'react'
import { useRoutes } from 'hookrouter'

import Home from '../views/Home'
import Search from '../views/Search'

const routes = {
  '/': ()=> <Home />,
  '/search': () => <Search />,
}

const manager = () => {
  return useRoutes(routes)
}

export default manager