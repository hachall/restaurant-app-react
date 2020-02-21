import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class VenueContent extends Component {

  render() {
    if (!this.props.venue) {
      return <p>Loading...</p>;
    }
    return (
      <div className="venue-page">
        <div className="venue-item">
          <h3>{this.props.venue.name}</h3>
          <p>{this.props.venue.desc}</p>
        </div>
        <div>
          {Object.keys(this.props.menu).map((key, index) => {
            return (
              <div key={key}>
                <h3>{key}</h3>
                {this.props.menu[key].map((menu_item) => {
                  return (<div className="" key={menu_item[0]}>{`${menu_item[0]}:  £${menu_item[1]}`}</div>)
                })}
              </div>
            )
          })}
        </div>
        <Link to="/">Back</Link>
      </div> );
  }
}

export default VenueContent;
