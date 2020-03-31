import React, { Component } from 'react'

class NavBarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>

          <input className="nav-searchbar" type="text" placeholder="What are you looking for?" value={this.state.value} onChange={this.handleChange} />

        {/*<input type="submit" value="Submit" />*/}
      </form>
    );
  }
}

export default NavBarSearch;
