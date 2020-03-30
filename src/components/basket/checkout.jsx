import React, { Component } from 'react'

import PayButton from './pay_button'

class Checkout extends Component {


  render() {

    return (
      <div>

        <PayButton
          stripePublicKey={"pk_test_k3ADhhaZ23wxFDIt71RopSdH00SUqUefPB"}
          apiName="stripeapi"
          apiEndpoint="/checkout"
          name='T-shirt'
          description='Comfortable cotton t-shirt'
          images={['http://lorempixel.com/400/200/']}
          amount={550}
          currency='usd'
          quantity={1}
          success_url='http://localhost:8081/basket'
          cancel_url='http://localhost:8081/basket'
        />

      </div>
    )
  }
}
export default Checkout;
