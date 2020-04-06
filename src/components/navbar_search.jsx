import React, { Component } from 'react'
import { FaSistrix } from "react-icons/fa";

class NavBarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      focus: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const ROOT_URL = "https://fncflnxl03.execute-api.eu-west-2.amazonaws.com/testing/get-tags"
    const proxyurl = "https://cors-anywhere.herokuapp.com/"

    if (event.target.value != "") {
      this.setState({value: event.target.value}, () => {
        const promise = fetch(`${proxyurl}${ROOT_URL}/?query=${this.state.value}`, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(response => response.json())
        .then((data => {
          this.setState({suggestions: JSON.parse(data.body)})
        }))
      })
    } else {
      this.setState({value: "", suggestions: []})
    }
  }

  handleSubmit(event) {

    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleFocus = () => {
    this.setState({focus: true})
  }

  handleFocusOut = () => {
    this.setState({focus: false})
  }

   BoldedText = (text, shouldBeBold ) => {
    const textArray = text.split(shouldBeBold);
    return (
      <span>
        {textArray.map((item, index) => (
          <>
            {item}
            {index !== textArray.length - 1 && (
              <b>{shouldBeBold}</b>
            )}
          </>
        ))}
      </span>
    );
  }

  render() {
    console.log(this.state.suggestions)
    return (
      <div className="navsearch-box">
        <form onFocus={this.handleFocus} onBlur={this.handleFocusOut} onSubmit={this.handleSubmit}>

            <input className="nav-searchbar" type="text" placeholder="What are you looking for?" value={this.state.value} onChange={this.handleChange} />
            <button type="submit" className="nav-btn"><FaSistrix className="nav-magnifying"/></button>
          {/*<input type="submit" value="Submit" />*/}
        </form>
        {(this.state.focus && this.state.suggestions.length > 0) ?
          <div className="suggestions">
            {this.state.suggestions.map((sugg) => {
              return (
                <div className="suggestion" key={sugg[0]}>
                  <div className="sugg-content">
                    <div className="sugg-item">{this.BoldedText(sugg[0], this.state.value)}</div>
                    <div className="sugg-count">({sugg[1]})</div>
                  </div>
                </div>
              )
            })}
          </div>
          : ""
        }
      </div>
    );
  }
}

export default NavBarSearch;
