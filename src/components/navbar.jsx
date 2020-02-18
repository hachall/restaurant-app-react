import React, { Component } from 'react'

import { GiHamburger } from "react-icons/gi";

class NavBar extends Component {


  render() {
    return (
      <div className="navbar">
        <GiHamburger className="navbar-logo"/>
      </div>
    )
  }
}

export default NavBar;
