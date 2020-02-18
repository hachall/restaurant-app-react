import React, { Component } from 'react'

import HomeMobile from 'home_mobile'
import HomeDesktop from 'home_desktop'

class HomeMain extends Component {

  render() {

    return (

      <div>
        <HomeDesktop />
        <HomeMobile />

      </div>
    )
  }
}

export default HomeMain;
