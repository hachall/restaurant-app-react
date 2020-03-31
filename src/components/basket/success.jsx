import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import { API } from 'aws-amplify';

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
    })

  }

  render() {



    return (
      <div className="">{(this.state.session) ? this.state.session.id : ""}</div>

    )
  }
}

export default withRouter(Success);
