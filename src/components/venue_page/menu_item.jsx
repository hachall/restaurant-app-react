import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";

import { addToBasket } from '../../actions'
import { removeFromBasket } from '../../actions'

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
    this.props.addToBasket({name: this.props.name, price: this.props.price, venue: this.props.venueid})
  }

  decrementValue = () => {
    if (this.state.value > 0) {
      this.setState({value: this.state.value - 1})
      this.props.removeFromBasket({name: this.props.name, price: this.props.price, venue: this.props.venueid})
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
          <div className="" key={this.props.name}><span className="item-name">{`${this.props.name}:`}</span><span className="price-bold">{`£${this.props.price}`}</span></div>
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
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired

}

function mapStateToProps(state) {
  return {basket: state.basket}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {addToBasket: addToBasket, removeFromBasket: removeFromBasket },
     dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);


