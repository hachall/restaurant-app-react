import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import VenuesContainer from './venues_container'
import MapBox from './map_box'

class HomeDesktop extends Component {

  render() {
    let map_classes = ""
    if (this.props.map_state) {
      map_classes += "map-open"
    } else {
      map_classes += "map-closed"
    }

    return (
      <div className="home-desktop">
        <VenuesContainer/>
        <div className={map_classes}>
          <MapBox/>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    map_state: state.map
  };
}

export default connect(mapStateToProps, null)(HomeDesktop);
