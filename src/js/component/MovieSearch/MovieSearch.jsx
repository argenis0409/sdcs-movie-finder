import React from 'react';
import { getMovieDetails } from './movieSearchAction';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='container'>

        <div>
          <h1>Movie Finder</h1>
        </div>

        <div className="row text-center">
          <input
            type='text'
            className='form-control col-sm-9'
            placeholder='type movie you would like to see'
            onChange={} />

          <button className='go col-sm-1' type='button' onClick={}>Go!</button>
        </div>
      </div>
    )
  }
}

export default MovieSearch;
