import React, { Component } from 'react'
import { API } from 'aws-amplify';
import { injectStripe } from 'react-stripe-elements';
import "regenerator-runtime/runtime.js";

import PropTypes from 'prop-types';


class PayButtonContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    };
  }

  handlePay = async() => {
    const body = {
        name: this.props.name,
        description: this.props.description,
        images: this.props.images,
        amount: this.props.amount,
        currency: this.props.currency,
        quantity: this.props.quantity,
        success_url: this.props.success_url,
        cancel_url: this.props.cancel_url,
    };
    // Make the request
    const response = await API.post(this.props.apiName, this.props.apiEndpoint, { body });
    // Redirect the user to the checkout session
    console.log(response)
    this.props.stripe.redirectToCheckout({
        sessionId: response.session.id
    }).then(function (result) {
        console.log(result.error.message)
    });
  };


  render() {
    return (
      <button onClick={this.handlePay} disabled={this.state.loading} variant="contained" color="secondary">Pay ({parseFloat(Math.round(this.props.amount) / 100).toFixed(2)} {this.props.currency})</button>
    )
  }
}



// PayButtonContent.propTypes = {
//     apiName: PropTypes.string.isRequired,
//     apiEndpoint: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     images: PropTypes.array.isRequired,
//     amount: PropTypes.number.isRequired,
//     currency: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//     success_url: PropTypes.string.isRequired,
//     cancel_url: PropTypes.string.isRequired,
// };

export default injectStripe(PayButtonContent);
