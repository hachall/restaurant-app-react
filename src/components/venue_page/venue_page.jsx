import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenue } from '../../actions';
import { fetchMenu } from '../../actions';

class VenuePage extends Component {

  componentDidMount() {
    if (!this.props.venue) {
      this.props.fetchVenue(this.props.match.params.id);
    }
    this.props.fetchMenu(this.props.match.params.id);
  }

  render() {
    console.log(this.props.menu)
    if (!this.props.venue) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className="venue-item">
          <h3>{this.props.venue.name}</h3>
          <p>{this.props.venue.desc}</p>
        </div>
        <div>
          {this.props.menu.items.map((menu_item) => {
            return (<div className="" key={menu_item[0]}>{`${menu_item[0]}:  £${menu_item[1]}`}</div>)
          })}
        </div>
        <Link to="/">Back</Link>
      </div> );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVenue, fetchMenu }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const venue = state.venues.find(v => v.id === idFromUrl);
  return { venue: venue, menu: state.menu };
}
export default connect(mapStateToProps, mapDispatchToProps)(VenuePage);
