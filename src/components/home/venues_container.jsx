import React, { Component } from 'react'

import VenueList from './venue_list'

class VenuesContainer extends Component {

  render() {

    return (
      <div className="venues-container">
        <div className="venues-title-container">
          <h2 className="venues-container-title">Venues in <span className="postcode-text">SW7</span></h2>
          <div className="change-postcode">
            <span className="change-bracket">(</span><a href="/" className="change-link">change</a><span className="change-bracket">)</span>
          </div>
        </div>
        <VenueList/>
      </div>
    )
  }
}

export default VenuesContainer;
