import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { createHistory as history } from 'history';


import routes from './routes'
import Home from './components/home/home'
import VenuePage from './components/venue_page/venue_page';
import Checkout from './components/basket/checkout';
import NavBar from './components/navbar';

class Router extends Component {


  render() {

    // const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (

      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route  path="/" exact component={Home}  />
            <Route  path="/venues/:venueid/:typeid" component={VenuePage}  />
            <Route  path="/checkout" component={Checkout}  />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
