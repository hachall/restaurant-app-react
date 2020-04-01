import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { API } from 'aws-amplify';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { fetchVenue } from '../../actions';

import MapBox from '../map/map_box'


class Success extends Component {
  constructor(props) {
    super(props)
    this.state = {
      session: null
    };
  }

  getSession = async() => {
    let token = this.props.location.search.split("=")[1]
    let toke = "cs_test_l0xOkfjiGbkNlsoY4zEeu0V97Nq9nx5MhzUlY1fWa3mZz2tlm8zYI4dj"

    const body = {token: token}
    // Make the request
    return await API.post('stripeapi', '/session', { body });
  }

  componentDidMount() {
    this.getSession().then(response => {
      this.setState({session: response.session})
      this.props.fetchVenue(this.state.session.metadata.venueid, this.state.session.metadata.typeid)
    })



  }

  sumTotal = () => {
    let total = 0
    this.state.session.display_items.map((item) => {
      total += item.amount * item.quantity
    })
    return parseFloat(Math.round(total) / 100).toFixed(2);
  }

  render() {

    console.log(this.props.venues[0])
    if (!this.state.session || !this.props.venues[0]) {
        return (<div className="loader">
          <div data-v-21dcae14="" className="box" category="animation" text=""><div data-v-21dcae14="" className="bouncingLoader"><div data-v-21dcae14=""></div></div></div>
          </div>
        )
    }

    return (
      <div className="success-page">
        <div className="sucess-box">
          <h1 className="order-code">Order Code: {this.state.session.id.slice(-8)} </h1>
          <div className="success-box-top">
            <IoMdCheckmarkCircleOutline className="success-icon" />
            <h3 className="paymen">Payment Processed!</h3>
            <h5>{this.state.session.metadata.venue} is preparing your order</h5>
            <h5>A confirmation receipt has been sent to your email</h5>
          </div>
          <div className="success-box-info">
            <ul className="success-list">
              {this.state.session.display_items.map((item) => {
                return(
                  <li className="success-items" key={item.custom.name}>{item.custom.name}, x{item.quantity}</li>
                )
              })}
            </ul>
            <div className="success-total">Total: £{this.sumTotal()}</div>

          </div>
          <div className="success-box-map">
            <MapBox venues={this.props.venues} center={[this.props.venues[0].longitude, this.props.venues[0].latitude]} zoom={[16]}/>
          </div>

        </div>

      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVenue }, dispatch);
}

function mapStateToProps(state) {
  return {venues: state.venues}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Success));
