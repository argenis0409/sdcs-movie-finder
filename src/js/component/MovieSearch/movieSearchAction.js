import axios from 'axios';

export function getMovieDetails(inputValue) {
  return {
    type: 'GET_MOVIE_DETAILS',
    payload: axios.get(`/movieInfo/${inputValue}`)
  }
}

export function updateMovieSearch(inputValue) {
  return {
    type: 'UPDATE_MOVIE_SEARCH',
    payload: inputValue
  };
}

