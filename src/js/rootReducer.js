import { combineReducers } from 'redux';
import MovieSearchReducer from './components/MovieSearch/movieSearchReducer';
import MovieDetailsReducer from './components/MovieDetails/movieDetailsReducer';

const rootReducer = combineReducers({
    movieSearch: MovieSearchReducer,
    movieDetail: MovieDetailsReducer
});

export default rootReducer;