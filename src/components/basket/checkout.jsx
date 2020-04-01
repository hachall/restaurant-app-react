import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PayButton from './pay_button'

class Checkout extends Component {

  getItems = (regional_curr) => {
    let items =  Object.keys(this.props.basket.items).map((item) => {
      return(
        {
          name: item,
          amount: this.props.basket.items[item].price * 100,
          quantity: this.props.basket.items[item].num,
          currency: regional_curr
        }
      )
    })

    // items[0]["description"] = this.props.basket.venue
    return items
  }


  render() {

    return (
      <div>

        <PayButton
          stripePublicKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
          apiName="stripeapi"
          apiEndpoint="/checkout"
          items={this.getItems('gbp')}
          venue={this.props.basket.venue}
          venueid={this.props.basket.venueid}
          typeid={this.props.basket.typeid}
          connectedAccount={this.props.basket.venue_stripe_acct}
          amount={this.props.basket.total}
          success_url='http://localhost:8081/success?session_id={CHECKOUT_SESSION_ID}'
          cancel_url={this.props.link}
          classname={this.props.classname}
          comp={this.props.comp}
          disabled={this.props.disabled}


        />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {basket: state.basket}
}

export default connect(mapStateToProps, null)(Checkout);
