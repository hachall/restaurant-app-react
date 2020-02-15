import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setVenues } from '../../actions';

import Venue from './venue'

class VenueList extends Component {

  componentDidMount() {
    this.props.setVenues();
  }

  render() {

    return (

      <div>
        {this.props.venues.map((venue) => {
          return (
            <Link to={`/venues/${venue.venueid}/${venue.typeid}`} key={venue.venueid}>
              <Venue key={venue.name} venue={venue}/>
            </Link>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setVenues: setVenues },
     dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(VenueList);
