import React, { Component } from 'react'

import { GiHamburger } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBarSearch from './navbar_search'

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


  render() {
    const { width } = this.state;
    const isMobile = width <= 600;

    return (
      <div className="navbar">
        <div className="navbar-section navbar-left">
          <GiHamburger className="navbar-logo navbar-icon"/>
          <NavBarSearch/>
        </div>
        <div className=" navbar-right">
          {(isMobile) ?
            <div>
              <GiHamburgerMenu className="navbar-icon"/>
            </div>

            :

            <div className="navbar-section">
              <div className="navbar-basket">
                <GiShoppingCart className="nav-basket-icon navbar-icon"/>
                <div className="basket-cost">£0.00</div>
              </div>
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

export default NavBar;
