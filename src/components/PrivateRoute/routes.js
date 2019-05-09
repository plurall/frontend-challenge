  import './index.css';
  import Home from '../../views/Home/';
  import Sobre from '../../views/Sobre/';
  import Artista from '../../views/Artista/';
  import {
    BrowserRouter,
    Switch
  } from 'react-router-dom'
  import PrivateRoute from './PrivateRoute';


  <BrowserRouter>
    <Switch>
      <PrivateRoute path = "/" component = {Home}/>
      <PrivateRoute path = "/sobre" component = {Sobre} />
      <PrivateRoute path = "/artista/:id" exact={true} component = {Artista} />
    </Switch>
  </BrowserRouter>
