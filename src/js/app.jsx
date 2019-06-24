import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearch from './component/MovieSearch/MovieSearch';
import MovieDetail from './component/MovieDetail/MovieDetail';

export default class App extends Component {
  render() {
    return (
      <Router>

        <div className='container'> 
          <Route exact path='/' component={ MovieSearch } />
          <Route path='/movie' component={ MovieDetail } />
        </div>

      </Router>
    )
  }
}
