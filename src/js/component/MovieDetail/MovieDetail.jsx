import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieDetail } from './movieDetailAction';


class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMovieDetail(this.props.match.params.id))
  }

  render() {
    const { movieDetails } = this.props;
    return (
      <div className='container'>
        <h1 id='heading' className='text-center mt-3 mb-3'>Movie Details</h1>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-sm-4'>
                <img src={movieDetails.Poster} alt='Movie Poster' />
              </div>
              <div className='col-sm-8'>
                <h3 id='movie-title' className='card-text'>{movieDetails.Title}</h3>
                <h6 className='card-text'>{movieDetails.Year}</h6>
                <h6 className='card-text'>{movieDetails.Rated}</h6>
                <h6 className='card-text'>{movieDetails.Released}</h6>
                <h6 className='card-text'>{movieDetails.Runtime}</h6>
                <h6 className='card-text'>{movieDetails.Genre}</h6>
                <hr />
                <p id='plot' className='card-text'>{movieDetails.Plot}</p>
                <hr />
                <h6 className='card-text'>{movieDetails.Language}</h6>
                <h6 className='card-text'>{movieDetails.Country}</h6>
                <h6 className='card-text'>{movieDetails.Awards}</h6>
                <hr />
                <Link className='back-to-search' to='/'>Back to Search</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetail;
