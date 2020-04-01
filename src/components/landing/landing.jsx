import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'

import { postPostcode } from '../../actions'
import { setCenter } from '../../actions'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      width: window.innerWidth,
      changed: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }



  componentDidUpdate(prevProps, prevState) {
    this.nameInput.focus();
    window.addEventListener('resize', this.handleWindowSizeChange);
    if (this.props.user_loc.length > 0 && this.state.value == "" && !this.state.changed) {
      console.log("reverse geocdoing")
      fetch(`http://api.postcodes.io/postcodes/?lon=${-0.226927}&lat=${51.497276}`)
        .then(res => res.json())          // convert to plain text
        .then((data) => {
          if (data.status == 200) {
            let word = data.result[0].postcode
            for (var i = 0; i < word.length; i++) {
              this.setState({value: this.state.value += word.charAt(i)});
            }
            this.setState({changed: true})
          }
      })
    }
  }

  componentWillUnmount() {
    this.props.postPostcode(this.state.value)
    this.props.setCenter(this.state.value)
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
  };


  render() {
    const { width } = this.state;
    const isMobile = width <= 600;
    let sectionStyle = {
      width: "100%",
      height: "100%",
      backgroundSize: (isMobile) ? "cover" : "100% 100%",
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url(https://restaurant-app.s3.eu-west-2.amazonaws.com/New+Project.png)"
    };


    return (


      <div className="landing-page" style={sectionStyle}>
        <div className="landing-box">
          <div className="landing-title">
            What is <br/> your postcode?
          </div>
          <div className="input-inline">
            <input ref={(input) => { this.nameInput = input; }} className="landing-input" type="text" value={this.state.value} onChange={this.handleChange}/>
            <Link to="/home">
              <div className="landing-button">Go</div>
            </Link>
          </div>
          <div className="landing-paragraph">
            Order now, and your food will be ready by the time you arrive!
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user_loc: state.user_loc}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {postPostcode: postPostcode, setCenter: setCenter },
     dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
