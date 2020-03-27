import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import VenuesContainer from './venues_container'
import MapBox from '../map/map_box'

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
          <MapBox venues={this.props.venues}/>
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

HomeDesktop.propTypes = {
  map_state: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, null)(HomeDesktop);
