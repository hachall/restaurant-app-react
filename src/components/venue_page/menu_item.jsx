import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";


class MenuItem extends Component {
  constructor() {
      super();
      this.state = {
        value: 0,
      };
  }


  render() {
    return (
      <div className="menu-item">
        <div className="menu-item-left">
          <div className="" key={this.props.item}><span className="item-name">{`${this.props.item}:`}</span><span className="price-bold">{`£${this.props.price}`}</span></div>
        </div>
        <div className="menu-item-right">
          <TiMinusOutline className="price-toggle price-btns"/>
          <div className="price-toggle">{this.state.value}</div>
          <TiPlusOutline className="price-toggle price-btns"/>
        </div>
      </div> );
  }
}

export default MenuItem;
