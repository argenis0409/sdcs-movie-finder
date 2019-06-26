import { combineReducers } from 'redux';
import movieSearchReducer from './component/MovieSearch/movieSearchReducer';
import movieDetailReducer from './component/MovieDetail/movieDetailReducer';

const rootReducer = combineReducers({
    movieSearch: movieSearchReducer,
    movieDetail: movieDetailReducer
});

export default rootReducer;