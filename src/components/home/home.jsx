import React, { Component, lazy, Suspense } from 'react'

const Filters = lazy(() => import('./filters'));
const HomeMain = lazy(() => import('./home_main'));

import Loader from '../loader'

class Home extends Component {

  render() {

    return (
      <div>
        <Suspense fallback={<Loader/>}>
          <Filters/>
          <HomeMain/>
        </Suspense>
      </div>
    )
  }
}

export default Home;
