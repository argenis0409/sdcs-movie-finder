import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieDetails, updateMovieSearch } from './movieSearchAction';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick() {
    const { inputValue, dispatch } = this.props;
    dispatch(getMovieDetails(inputValue));
  }

  handleInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateMovieSearch(value));
  }

  render() {
    const { searchResults } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='input-group mb-3'>
              <input
                className='form-control'
                placeholder='Type Movie You Would Like To See'
                onChange={this.handleInput} />

              <button className='btn btn-outline-secondary' onClick={this.handleClick}>Go!</button>
            </div>
          </div>
        </div>
        {
          searchResults.map(result => (
            <div className='card mb-3'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-4'>
                    <img src={result.Poster} alt='Movie Poster' />
                  </div>
                  <div className='col-sm-8'>
                    <h3 className='card-text'>{result.Title}</h3>
                    <h4 className='card-text'>{result.Year}</h4>
                    <h5 className='card-text'>{result.Type}</h5>
                    <hr />
                    <Link to={`/movie/${result.imdbID}`}>More Information</Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default MovieSearch;