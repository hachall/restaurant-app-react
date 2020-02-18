import React, { Component } from 'react'

import VenueList from './venue_list'

class VenuesContainer extends Component {

  render() {

    return (
      <div className="venues-container">
        <h2>Venues...</h2>
        <VenueList/>
      </div>
    )
  }
}

export default VenuesContainer;
