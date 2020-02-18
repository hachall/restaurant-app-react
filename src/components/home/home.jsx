import React, { Component } from 'react'

import Filters from './filters'
import HomeMain from './home_main'

class Home extends Component {

  render() {

    return (
      <div>
        <Filters/>
        <HomeMain/>
      </div>
    )
  }
}

export default Home;
