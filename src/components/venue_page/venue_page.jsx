import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchVenue } from '../../actions';
import { fetchMenu } from '../../actions';
import { emptyMenu } from '../../actions';

import VenueContent from './venue_content'
import Basket from '../basket/basket'

class VenuePage extends Component {
  constructor() {
      super();
      this.state = {
        width: window.innerWidth,
      };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    if (!this.props.venue) {
      this.props.fetchVenue(this.props.match.params.venueid, this.props.match.params.typeid)
    }
    this.props.fetchMenu(this.props.match.params.venueid, this.props.match.params.typeid);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    this.props.emptyMenu()
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;

      if (!this.props.venue) {
        return (<div className="loader">
          <div data-v-21dcae14="" className="box" category="animation" text=""><div data-v-21dcae14="" className="bouncingLoader"><div data-v-21dcae14=""></div></div></div>
          </div>
        )
      }

      if (isMobile) {
        return (
          <div className="venue-page-mobile">
            <VenueContent venue={this.props.venue} menu={this.props.menu}/>
            <Basket mobile={true} venue={this.props.venue.name}/>
          </div>
        );
      } else {
        return (
          <div className="venue-page-desktop">
            <div className="venue-page-left">
              <img src={this.props.venue.imgurl} alt=""/>
              <div className="venue-page-mapbox">
              </div>
              <Basket mobile={false} venue={this.props.venue.name}/>
            </div>
            <div className="venue-page-right">
              <VenueContent venue={this.props.venue} menu={this.props.menu}/>
            </div>
          </div>
        );
      }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVenue, fetchMenu, emptyMenu }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.venueid, 10); // From URL

  const venue = state.venues.find(v => v.venueid == idFromUrl);
  return { venue: venue, menu: state.menu };
}

VenueContent.propTypes = {
  venue: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(VenuePage);
