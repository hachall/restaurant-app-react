import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMap } from '../../actions'
import PropTypes from 'prop-types';

import { GiWalk } from "react-icons/gi";
import { GiTabletopPlayers } from "react-icons/gi";
import { GiTreasureMap } from "react-icons/gi";

import RangeSlider from "./slider"
import SortDropdown from "./dropdown"


class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      restaurants: true,
      cafes: true,
      bars: true,
      pickup: false
    };

  }

  componentDidMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
  }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
  };

  toggleMode = () => {
    this.setState({pickup: !this.state.pickup})
  }

  toggleType = (e) => {
      console.log(e.target.dataset.type)
      let type = e.target.dataset.type
      this.setState({
        restaurants: (type == "restaurants") ? !this.state.restaurants : this.state.restaurants,
        cafes: (type == "cafes") ? !this.state.cafes : this.state.cafes,
        bars: (type == "bars") ? !this.state.bars : this.state.bars,

      })
    }

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;
    let top_classes = "filters";
    let row_one_classes = "filters-row-one";
    let row_two_classes = "filters-row-two";
    if (!isMobile) {
      top_classes += " filters-flex";
      row_one_classes += " filters-flex";
    }


    let toggles_classes = "filters-toggle"
    if (isMobile) {
      toggles_classes += " toggles-mobile"
    }


    return (
      <div className={top_classes}>
        <div>
          <div className={row_one_classes}>
            <div className="type-buttons">
              <div onClick={this.toggleType} data-type="restaurants" className={(this.state.restaurants) ? "type-button type-selected" : "type-button type-deselected"}>Restaurants</div>
              <div onClick={this.toggleType} data-type="cafes" className={(this.state.cafes) ? "type-button type-selected" : " type-button type-deselected"}>Cafes</div>
              <div onClick={this.toggleType} data-type="bars" className={(this.state.bars) ? "type-button type-selected" : " type-button type-deselected"}>Bars</div>
            </div>
            <div className="price-slider-cntnr">
              <p className="price-icon">£</p>
              <div className={""}>
                <RangeSlider/>
              </div>
            </div>
          </div>
          <div className={row_two_classes}>
            <p>Sort by: </p>
            <SortDropdown/>
          </div>
        </div>
        <div className={toggles_classes}>

          <div  className={"eatmode-toggle eatmode-deselected"}><GiWalk className="toggle-icon"/> <div>Pick Up</div></div>
          {/*<div onClick={this.toggleMode} className={(!this.state.pickup) ? "eatmode-toggle eatmode-selected" : "eatmode-toggle eatmode-deselected"}><GiTabletopPlayers className="toggle-icon"/> Eat In</div>*/}
          <div className="mapbtn-toggle" id="map-toggle" onClick={this.props.toggleMap}>{(this.props.map_state) ? "List" : "Map"}</div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    map_state: state.map
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {toggleMap: toggleMap },
     dispatch);
}

Filters.propTypes = {
  map_state: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

