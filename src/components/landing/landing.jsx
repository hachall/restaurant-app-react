import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'

import { postPostcode } from '../../actions'
import { setCenter } from '../../actions'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  componentWillUnmount() {
    this.props.postPostcode(this.state.value)
    this.props.setCenter(this.state.value)
  }


  render() {
    let sectionStyle = {
      width: "100%",
      height: "100%",
      backgroundSize: cover,
      backgroundImage: "url(https://restaurant-app.s3.eu-west-2.amazonaws.com/New+Project.png)"
    };


    return (

      <div className="landing-page" style={sectionStyle}>
        <div className="landing-box">
          <div className="landing-title">
            What is your postcode?
          </div>
          <div className="input-inline">
            <input className="landing-input" type="text" value={this.state.value} onChange={this.handleChange}/>
            <Link to="/home">
              <div className="landing-button">Go</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {postPostcode: postPostcode, setCenter: setCenter },
     dispatch);
}

export default connect(null, mapDispatchToProps)(LandingPage);
