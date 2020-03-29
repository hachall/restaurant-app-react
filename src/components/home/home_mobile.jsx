import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import VenuesContainer from './venues_container'
import MapBox from '../map/map_box'

class HomeMobile extends Component {

  render() {
    let mobile_venues_classes = ""
    let mobile_map_classes = ""

    if (this.props.map_state) {
      mobile_venues_classes += "mobile-off"
      mobile_map_classes += "mobile-on"
    } else {
      mobile_map_classes += "mobile-off"
      mobile_venues_classes += "mobile-on"
    }


    return (

      <div className="home-mobile">
        <div className={mobile_venues_classes}>
          <VenuesContainer/>
        </div>
        <div className={mobile_map_classes}>
          <MapBox venues={this.props.venues} center={[-0.1749, 51.4988]} zoom={[15]}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    map_state: state.map,
    venues: state.venues
  };
}

HomeMobile.propTypes = {
  map_state: PropTypes.bool.isRequired
}


export default connect(mapStateToProps, null)(HomeMobile);
