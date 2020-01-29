import React, { Component } from 'react'

class Venue extends Component {

  render() {

    return (

      <div className="venue-listing">
        <div className="venue-listing-title">
          {this.props.venue.name}
        </div>
        <div className="venue-listing-desc">
          {this.props.venue.desc}
        </div>

      </div>
    )
  }
}

export default Venue;
