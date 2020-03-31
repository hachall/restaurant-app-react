import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';


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
    if (this.props.venues.length == 0) {
      return (<div className="loader">
          <div data-v-21dcae14="" className="box" category="animation" text=""><div data-v-21dcae14="" className="bouncingLoader"><div data-v-21dcae14=""></div></div></div>
        </div>
      )
    }

    let card_classes = "venue-card"

    if (this.props.map) {
      card_classes += " card-map-mode"
    }


    return (
      <div>
        <Container>
          <Row>
            {this.props.venues.map((venue) => {
              return (
                <Col xs={12} sm={(this.props.map) ? 12 : 4} key={venue.venueid}>
                  <Link style={{textDecoration: "none"}} to={`/venues/${venue.venueid}/${venue.typeid}`}>
                    <div className={card_classes}>
                      <Venue key={venue.name} venue={venue}/>
                    </div>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues, map: state.map
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setVenues: setVenues },
     dispatch);
}

VenueList.propTypes = {
  venues: PropTypes.array.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(VenueList);
