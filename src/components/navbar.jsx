import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';


import { GiHamburger } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBarSearch from './navbar_search'

import Checkout from './basket/checkout'

class NavBar extends Component {
  constructor() {
      super();
      this.state = {
        width: window.innerWidth,
      };
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
  };

  basketComp = () => {
    let basket_classes = "navbar-basket"
    if (this.props.basket.total > 0) {
      basket_classes += " basket-active"
    }
    return (
      <div className={basket_classes}>
        <GiShoppingCart className="nav-basket-icon navbar-icon"/>
        <div className="basket-cost">{`£${this.props.basket.total}`}</div>
      </div>
    )
  }

  getLocation = () => {
    const {pathname} = this.props.location;
    return pathname
  }


  render() {
    const { width } = this.state;
    const isMobile = width <= 600;
    let base = "http://localhost:8081"

    return (
      <div className="navbar">
        <div className="navbar-section navbar-left">
          <Link to='/home'>
            <GiHamburger className="navbar-logo navbar-icon"/>
          </Link>
          <NavBarSearch/>
        </div>
        <div className=" navbar-right">
          {(isMobile) ?
            <div>
              <GiHamburgerMenu className="navbar-icon"/>
            </div>

            :

            <div className="navbar-section">
              {/*<Link to="/basket">
                <div className="navbar-basket">
                  <GiShoppingCart className="nav-basket-icon navbar-icon"/>
                  <div className="basket-cost">{`£${this.props.basket.total}`}</div>
                </div>

              </Link>*/}
              <Checkout disabled={this.props.basket.total == 0} link={`${base}${this.getLocation()}`} classname="" comp={this.basketComp()}/>
              <div className="navbar-sign-in">
                Sign Up
              </div>
            </div>


          }

        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { basket: state.basket };
}

export default withRouter(connect(mapStateToProps, null)(NavBar));
