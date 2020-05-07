import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { createHistory as history } from 'history';

import routes from './routes'
import Home from './components/home/home'
import VenuePage from './components/venue_page/venue_page';
import Success from './components/basket/success';
import LandingPage from './components/landing/landing';
import NavBar from './components/navbar';
import ErrorPage from './components/landing/error';


class Router extends Component {


  render() {

    // const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route  path="/" exact component={LandingPage}  />
            <Route  path="/home" component={Home}  />
            <Route  path="/venues/:venueid/:typeid" component={VenuePage}  />
            <Route  path="/success" component={Success}  />
            <Route component={ErrorPage} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
