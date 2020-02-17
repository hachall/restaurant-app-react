import React, { Component } from 'react'

import VenueList from './venue_list'
import Filters from './filters'

class Home extends Component {

  render() {

    return (
      <div>
        <Filters/>
        <VenueList/>
      </div>
    )
  }
}

export default Home;
