import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearch from './component/MovieSearch';
import MovieDetail from './component/MovieDetail';

export default class App extends Component {
  render() {
    return (
      <Router>

        <div className='container'>
          <h1 className='text-center mt-3 mb-3'>Movie Finder</h1>
          <div className='row'>
          <Route exact path='/' component={MovieSearch} />
          <Route path='/movie/:id' component={MovieDetail} />
          </div>
        </div>

      </Router>
    )
  }
}
