import React, { Component } from 'react'

class Basket extends Component {


  render() {


    return (
      <div className={this.props.mobile ? "basket basket-mobile" : "basket basket-desktop"}>
        <div className="basket-details">
          <div className="basket-left">Basket:</div>
          <div className="basket-right">£9.99</div>
        </div>
        <div className="co-button">Go To Checkout</div>
      </div>
    )
  }
}
export default Basket;
