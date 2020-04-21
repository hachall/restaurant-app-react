import React, { Component } from 'react'

import HomeMobile from './home_mobile'
import HomeDesktop from './home_desktop'

class HomeMain extends Component {
  constructor() {
      super();
      this.state = {
        width: window.innerWidth,
      };
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;

      if (isMobile) {
        return (
          <div className="home-main">
            <HomeMobile/>
          </div>
        );
      } else {
        return (
          <div className="home-main">
            <HomeDesktop/>
          </div>
        );
      }
  }
}

export default HomeMain;
