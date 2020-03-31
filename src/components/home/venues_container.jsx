import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VenueList from './venue_list'

class VenuesContainer extends Component {

  render() {

    return (
      <div className="venues-container">
        <div className="venues-title-container">
          <h2 className="venues-container-title">Venues in <span className="postcode-text">{this.props.postcode}</span></h2>
          <div className="change-postcode">
            <span className="change-bracket">(</span><a href="/" className="change-link">change</a><span className="change-bracket">)</span>
          </div>
        </div>
        <VenueList/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {postcode: state.postcode}
}

export default connect(mapStateToProps, null)(VenuesContainer);
