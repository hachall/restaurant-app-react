import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GiPin } from "react-icons/gi";
import { TiArrowLeftOutline } from "react-icons/ti";

import Menu from './menu'

class VenueContent extends Component {

  render() {
    if (!this.props.venue) {
      return <p>Loading...</p>;
    }
    return (
      <div className="venue-page">
        <Link className="back-button" to="/">
          <TiArrowLeftOutline/>
          <div>Back</div>
         </Link>
        <div className="venue-item">
          <h3>{this.props.venue.name}</h3>
          <p>{this.props.venue.desc}</p>
          <p className="venue-address"><span className="venue-pin">{<GiPin/>}</span>{this.props.venue.address}</p>
        </div>
        <div className="venue-menu">
          <Menu />
        </div>
      </div> );
  }
}

export default VenueContent;
