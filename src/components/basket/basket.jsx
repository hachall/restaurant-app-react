import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Basket extends Component {


  render() {

    let classes = "basket"
    classes += (this.props.mobile) ? " basket-mobile" : " basket-desktop"

    if (this.props.basket.total == 0 || this.props.venueid != this.props.basket.venue) {
      classes += " basket-close"
    }

    console.log(this.props.basket)

    return (
      <div className={classes}>
        <div className="basket-details">
          <div className="basket-left">Basket:</div>
          <div className="basket-right">{`£${this.props.basket.total}`}</div>
        </div>
        <div className="co-button">Go To Checkout</div>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return { basket: state.basket };
}

export default connect(mapStateToProps, null)(Basket);
