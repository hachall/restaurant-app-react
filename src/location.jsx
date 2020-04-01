import React, { Component } from 'react'
import { geolocated } from "react-geolocated";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {setUserLoc} from "./actions"

class Location extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isGeolocationAvailable && this.props.isGeolocationEnabled && this.props.coords.latitude && this.props.coords.longitude) {
      console.log("props updated")
      this.props.setUserLoc([this.props.coords.longitude, this.props.coords.latitude])
    } else {
      console.log("props unavailable")
    }
  }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setUserLoc: setUserLoc },
     dispatch);
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    watchPosition: true,
})( connect(null, mapDispatchToProps)(Location));
