import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearch from './component/MovieSearch';
import MovieDetail from './component/MovieDetail';

export default class App extends Component {
  render() {
    return (
      <Router>

        <div className='container'>
          <div className='row'>
          <Route exact path='/' component={MovieSearch} />
          <Route path='/movie/:id' component={MovieDetail} />
          </div>
        </div>

      </Router>
    )
  }
}
