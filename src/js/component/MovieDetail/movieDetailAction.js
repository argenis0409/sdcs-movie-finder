import axios from 'axios';

export function getMovieDetail(movieID) {
    return {
        type: 'GET_MOVIE_DETAIL',
        payload: axios.get(`/movie/${movieID}`)
    };
}