import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GiPin } from "react-icons/gi";
import { TiArrowLeftOutline } from "react-icons/ti";



import PropTypes from 'prop-types';

import Menu from './menu'

class VenueContent extends Component {

  render() {
    return (
      <div className="venue-page">
        <Link className="back-button" to="/home">
          <TiArrowLeftOutline/>
          <div>Back</div>
         </Link>
        <div className="venue-item">
          <h3>{this.props.venue.name}</h3>
          <p>{this.props.venue.desc}</p>
          <p className="venue-address"><span className="venue-pin">{<GiPin/>}</span>{this.props.venue.address}</p>
          <div className="times">
            <p>{"Prep time: 25min"}</p>
            <p>{"Distance: 15min"}</p>
          </div>
        </div>
        <div className="venue-menu">
          <Menu venue={this.props.venue}/>
        </div>
      </div> );
  }
}

VenueContent.propTypes = {
  venue: PropTypes.object.isRequired,
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  })
}

export default VenueContent;
