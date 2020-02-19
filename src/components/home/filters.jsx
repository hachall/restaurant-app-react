import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMap } from '../../actions'

import RangeSlider from "./slider"
import SortDropdown from "./dropdown"


class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      restaurants: true,
      cafes: true,
      bars: false
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


    return (
      <div className={top_classes}>
        <div>
          <div className={row_one_classes}>
            <div className="type-buttons">
              <div className={(this.state.restaurants) ? "type-button type-selected" : "type-button type-deselected"}>Restaurants</div>
              <div className={(this.state.cafes) ? "type-button type-selected" : " type-button type-deselected"}>Cafes</div>
              <div className={(this.state.bars) ? "type-button type-selected" : " type-button type-deselected"}>Bars</div>
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
        <div className="filters-toggle">

          <div className="eatmode-toggle">Eat In</div>
          <div className="eatmode-toggle">Pick Up</div>
          <div className="dummy-button" onClick={this.props.toggleMap}>click here</div>

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
export default connect(mapStateToProps, mapDispatchToProps)(Filters);

