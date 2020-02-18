import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMap } from '../../actions'


class Filters extends Component {

  render() {

    return (
      <div className="filters">
        <div className="dummy-button" onClick={this.props.toggleMap}>click here</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    map_state: state.map
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {toggleMap: toggleMap },
     dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Filters);

