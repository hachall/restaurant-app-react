import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";

import PropTypes from 'prop-types';

class MenuItem extends Component {
  constructor() {
      super();
      this.state = {
        value: 0,
      };
  }

  incrementValue = () => {
    this.setState({value: this.state.value + 1})
  }

  decrementValue = () => {
    if (this.state.value > 0) {
      this.setState({value: this.state.value - 1})
    }
  }


  render() {
    let minus_classes = "price-toggle price-grey"
    if (this.state.value != 0) {
      minus_classes += " price-btns"
    }

    return (
      <div className="menu-item">
        <div className="menu-item-left">
          <div className="" key={this.props.item}><span className="item-name">{`${this.props.item}:`}</span><span className="price-bold">{`£${this.props.price}`}</span></div>
        </div>
        <div className="menu-item-right">
          <TiMinusOutline className={minus_classes} onClick={this.decrementValue}/>
          <div className="price-toggle">{this.state.value}</div>
          <TiPlusOutline className="price-toggle price-btns" onClick={this.incrementValue}/>
        </div>
      </div> );
  }
}

MenuItem.propTypes = {
  item: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired

}

export default MenuItem;
