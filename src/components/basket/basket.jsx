import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import Checkout from './checkout'

class Basket extends Component {

  getLocation = () => {
    const {pathname} = this.props.location;
    return pathname
  }


  render() {

    let classes = "basket"
    classes += (this.props.mobile) ? " basket-mobile" : " basket-desktop"

    if (this.props.basket.total == 0 || this.props.venue != this.props.basket.venue) {
      classes += " basket-close"
    }


    return (
      <div className={classes}>
        <div className="basket-details">
          <div className="basket-left">Basket:</div>
          <div className="basket-right">{`£${this.props.basket.total.toFixed(2)}`}</div>
        </div>
        <Checkout disabled={false} link={this.getLocation()} classname={"co-button"} comp={<p className="">Go To Checkout</p>}/>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return { basket: state.basket };
}

export default withRouter(connect(mapStateToProps, null)(Basket));

